import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeatherReportService } from "./weatherReport.service";
import { WeatherReportControllerBase } from "./base/weatherReport.controller.base";

@swagger.ApiTags("weatherReports")
@common.Controller("weatherReports")
export class WeatherReportController extends WeatherReportControllerBase {
  constructor(protected readonly service: WeatherReportService) {
    super(service);
  }
}
