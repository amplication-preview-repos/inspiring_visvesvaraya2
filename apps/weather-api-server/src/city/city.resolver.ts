import * as graphql from "@nestjs/graphql";
import { CityResolverBase } from "./base/city.resolver.base";
import { City } from "./base/City";
import { CityService } from "./city.service";

@graphql.Resolver(() => City)
export class CityResolver extends CityResolverBase {
  constructor(protected readonly service: CityService) {
    super(service);
  }
}
