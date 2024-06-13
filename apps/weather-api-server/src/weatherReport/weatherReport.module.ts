import { Module } from "@nestjs/common";
import { WeatherReportModuleBase } from "./base/weatherReport.module.base";
import { WeatherReportService } from "./weatherReport.service";
import { WeatherReportController } from "./weatherReport.controller";
import { WeatherReportResolver } from "./weatherReport.resolver";

@Module({
  imports: [WeatherReportModuleBase],
  controllers: [WeatherReportController],
  providers: [WeatherReportService, WeatherReportResolver],
  exports: [WeatherReportService],
})
export class WeatherReportModule {}
