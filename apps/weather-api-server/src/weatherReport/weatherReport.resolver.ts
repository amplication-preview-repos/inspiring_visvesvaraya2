import * as graphql from "@nestjs/graphql";
import { WeatherReportResolverBase } from "./base/weatherReport.resolver.base";
import { WeatherReport } from "./base/WeatherReport";
import { WeatherReportService } from "./weatherReport.service";

@graphql.Resolver(() => WeatherReport)
export class WeatherReportResolver extends WeatherReportResolverBase {
  constructor(protected readonly service: WeatherReportService) {
    super(service);
  }
}
