import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type WeatherReportCreateInput = {
  city?: CityWhereUniqueInput | null;
  humidity?: number | null;
  reportTime?: Date | null;
  temperature?: number | null;
  windSpeed?: number | null;
};
