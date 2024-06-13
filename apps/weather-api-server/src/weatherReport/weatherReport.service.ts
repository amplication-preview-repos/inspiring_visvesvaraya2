import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeatherReportServiceBase } from "./base/weatherReport.service.base";

@Injectable()
export class WeatherReportService extends WeatherReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
