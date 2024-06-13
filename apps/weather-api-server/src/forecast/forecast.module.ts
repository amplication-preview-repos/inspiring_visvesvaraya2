import { Module } from "@nestjs/common";
import { ForecastModuleBase } from "./base/forecast.module.base";
import { ForecastService } from "./forecast.service";
import { ForecastController } from "./forecast.controller";
import { ForecastResolver } from "./forecast.resolver";

@Module({
  imports: [ForecastModuleBase],
  controllers: [ForecastController],
  providers: [ForecastService, ForecastResolver],
  exports: [ForecastService],
})
export class ForecastModule {}
