import { Forecast } from "../forecast/Forecast";
import { WeatherReport } from "../weatherReport/WeatherReport";

export type City = {
  country: string | null;
  createdAt: Date;
  forecasts?: Array<Forecast>;
  id: string;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  updatedAt: Date;
  weatherReports?: Array<WeatherReport>;
};
