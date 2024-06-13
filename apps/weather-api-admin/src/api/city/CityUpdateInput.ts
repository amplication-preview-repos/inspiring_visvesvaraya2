import { ForecastUpdateManyWithoutCitiesInput } from "./ForecastUpdateManyWithoutCitiesInput";
import { WeatherReportUpdateManyWithoutCitiesInput } from "./WeatherReportUpdateManyWithoutCitiesInput";

export type CityUpdateInput = {
  country?: string | null;
  forecasts?: ForecastUpdateManyWithoutCitiesInput;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  weatherReports?: WeatherReportUpdateManyWithoutCitiesInput;
};
