import { WeatherReportWhereInput } from "./WeatherReportWhereInput";
import { WeatherReportOrderByInput } from "./WeatherReportOrderByInput";

export type WeatherReportFindManyArgs = {
  where?: WeatherReportWhereInput;
  orderBy?: Array<WeatherReportOrderByInput>;
  skip?: number;
  take?: number;
};
