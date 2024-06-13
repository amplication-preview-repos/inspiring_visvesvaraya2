import { ForecastCreateNestedManyWithoutCitiesInput } from "./ForecastCreateNestedManyWithoutCitiesInput";
import { WeatherReportCreateNestedManyWithoutCitiesInput } from "./WeatherReportCreateNestedManyWithoutCitiesInput";

export type CityCreateInput = {
  country?: string | null;
  forecasts?: ForecastCreateNestedManyWithoutCitiesInput;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  weatherReports?: WeatherReportCreateNestedManyWithoutCitiesInput;
};
