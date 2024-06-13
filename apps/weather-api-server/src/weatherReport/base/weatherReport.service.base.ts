/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  WeatherReport as PrismaWeatherReport,
  City as PrismaCity,
} from "@prisma/client";

export class WeatherReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WeatherReportCountArgs, "select">
  ): Promise<number> {
    return this.prisma.weatherReport.count(args);
  }

  async weatherReports<T extends Prisma.WeatherReportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherReportFindManyArgs>
  ): Promise<PrismaWeatherReport[]> {
    return this.prisma.weatherReport.findMany<Prisma.WeatherReportFindManyArgs>(
      args
    );
  }
  async weatherReport<T extends Prisma.WeatherReportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherReportFindUniqueArgs>
  ): Promise<PrismaWeatherReport | null> {
    return this.prisma.weatherReport.findUnique(args);
  }
  async createWeatherReport<T extends Prisma.WeatherReportCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherReportCreateArgs>
  ): Promise<PrismaWeatherReport> {
    return this.prisma.weatherReport.create<T>(args);
  }
  async updateWeatherReport<T extends Prisma.WeatherReportUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherReportUpdateArgs>
  ): Promise<PrismaWeatherReport> {
    return this.prisma.weatherReport.update<T>(args);
  }
  async deleteWeatherReport<T extends Prisma.WeatherReportDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherReportDeleteArgs>
  ): Promise<PrismaWeatherReport> {
    return this.prisma.weatherReport.delete(args);
  }

  async getCity(parentId: string): Promise<PrismaCity | null> {
    return this.prisma.weatherReport
      .findUnique({
        where: { id: parentId },
      })
      .city();
  }
}
