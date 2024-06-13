import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { WeatherReportController } from "../weatherReport.controller";
import { WeatherReportService } from "../weatherReport.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  humidity: 42,
  id: "exampleId",
  reportTime: new Date(),
  temperature: 42.42,
  updatedAt: new Date(),
  windSpeed: 42.42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  humidity: 42,
  id: "exampleId",
  reportTime: new Date(),
  temperature: 42.42,
  updatedAt: new Date(),
  windSpeed: 42.42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    humidity: 42,
    id: "exampleId",
    reportTime: new Date(),
    temperature: 42.42,
    updatedAt: new Date(),
    windSpeed: 42.42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  humidity: 42,
  id: "exampleId",
  reportTime: new Date(),
  temperature: 42.42,
  updatedAt: new Date(),
  windSpeed: 42.42,
};

const service = {
  createWeatherReport() {
    return CREATE_RESULT;
  },
  weatherReports: () => FIND_MANY_RESULT,
  weatherReport: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("WeatherReport", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WeatherReportService,
          useValue: service,
        },
      ],
      controllers: [WeatherReportController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /weatherReports", async () => {
    await request(app.getHttpServer())
      .post("/weatherReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        reportTime: CREATE_RESULT.reportTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /weatherReports", async () => {
    await request(app.getHttpServer())
      .get("/weatherReports")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          reportTime: FIND_MANY_RESULT[0].reportTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /weatherReports/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/weatherReports"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /weatherReports/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/weatherReports"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        reportTime: FIND_ONE_RESULT.reportTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /weatherReports existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/weatherReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        reportTime: CREATE_RESULT.reportTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/weatherReports")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
