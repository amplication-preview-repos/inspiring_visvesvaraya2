import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ForecastServiceBase } from "./base/forecast.service.base";

@Injectable()
export class ForecastService extends ForecastServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
