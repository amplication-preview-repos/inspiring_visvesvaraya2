import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CityServiceBase } from "./base/city.service.base";

@Injectable()
export class CityService extends CityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
