/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WeatherReportService } from "../weatherReport.service";
import { WeatherReportCreateInput } from "./WeatherReportCreateInput";
import { WeatherReport } from "./WeatherReport";
import { WeatherReportFindManyArgs } from "./WeatherReportFindManyArgs";
import { WeatherReportWhereUniqueInput } from "./WeatherReportWhereUniqueInput";
import { WeatherReportUpdateInput } from "./WeatherReportUpdateInput";

export class WeatherReportControllerBase {
  constructor(protected readonly service: WeatherReportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WeatherReport })
  async createWeatherReport(
    @common.Body() data: WeatherReportCreateInput
  ): Promise<WeatherReport> {
    return await this.service.createWeatherReport({
      data: {
        ...data,

        city: data.city
          ? {
              connect: data.city,
            }
          : undefined,
      },
      select: {
        city: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        humidity: true,
        id: true,
        reportTime: true,
        temperature: true,
        updatedAt: true,
        windSpeed: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WeatherReport] })
  @ApiNestedQuery(WeatherReportFindManyArgs)
  async weatherReports(
    @common.Req() request: Request
  ): Promise<WeatherReport[]> {
    const args = plainToClass(WeatherReportFindManyArgs, request.query);
    return this.service.weatherReports({
      ...args,
      select: {
        city: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        humidity: true,
        id: true,
        reportTime: true,
        temperature: true,
        updatedAt: true,
        windSpeed: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WeatherReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async weatherReport(
    @common.Param() params: WeatherReportWhereUniqueInput
  ): Promise<WeatherReport | null> {
    const result = await this.service.weatherReport({
      where: params,
      select: {
        city: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        humidity: true,
        id: true,
        reportTime: true,
        temperature: true,
        updatedAt: true,
        windSpeed: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WeatherReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWeatherReport(
    @common.Param() params: WeatherReportWhereUniqueInput,
    @common.Body() data: WeatherReportUpdateInput
  ): Promise<WeatherReport | null> {
    try {
      return await this.service.updateWeatherReport({
        where: params,
        data: {
          ...data,

          city: data.city
            ? {
                connect: data.city,
              }
            : undefined,
        },
        select: {
          city: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          humidity: true,
          id: true,
          reportTime: true,
          temperature: true,
          updatedAt: true,
          windSpeed: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WeatherReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWeatherReport(
    @common.Param() params: WeatherReportWhereUniqueInput
  ): Promise<WeatherReport | null> {
    try {
      return await this.service.deleteWeatherReport({
        where: params,
        select: {
          city: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          humidity: true,
          id: true,
          reportTime: true,
          temperature: true,
          updatedAt: true,
          windSpeed: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
