import { WeatherReport as TWeatherReport } from "../api/weatherReport/WeatherReport";

export const WEATHERREPORT_TITLE_FIELD = "id";

export const WeatherReportTitle = (record: TWeatherReport): string => {
  return record.id?.toString() || String(record.id);
};
