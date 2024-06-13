import { City } from "../city/City";

export type Forecast = {
  city?: City | null;
  createdAt: Date;
  forecastTime: Date | null;
  humidity: number | null;
  id: string;
  temperature: number | null;
  updatedAt: Date;
  windSpeed: number | null;
};
