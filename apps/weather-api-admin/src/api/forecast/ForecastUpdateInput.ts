import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type ForecastUpdateInput = {
  city?: CityWhereUniqueInput | null;
  forecastTime?: Date | null;
  humidity?: number | null;
  temperature?: number | null;
  windSpeed?: number | null;
};
