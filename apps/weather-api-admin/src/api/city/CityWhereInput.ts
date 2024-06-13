import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ForecastListRelationFilter } from "../forecast/ForecastListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { WeatherReportListRelationFilter } from "../weatherReport/WeatherReportListRelationFilter";

export type CityWhereInput = {
  country?: StringNullableFilter;
  forecasts?: ForecastListRelationFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
  weatherReports?: WeatherReportListRelationFilter;
};
