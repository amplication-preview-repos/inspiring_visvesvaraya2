import * as graphql from "@nestjs/graphql";
import { ForecastResolverBase } from "./base/forecast.resolver.base";
import { Forecast } from "./base/Forecast";
import { ForecastService } from "./forecast.service";

@graphql.Resolver(() => Forecast)
export class ForecastResolver extends ForecastResolverBase {
  constructor(protected readonly service: ForecastService) {
    super(service);
  }
}
