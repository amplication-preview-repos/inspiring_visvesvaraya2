import { Forecast as TForecast } from "../api/forecast/Forecast";

export const FORECAST_TITLE_FIELD = "id";

export const ForecastTitle = (record: TForecast): string => {
  return record.id?.toString() || String(record.id);
};
