import { City } from "../city/City";

export type WeatherReport = {
  city?: City | null;
  createdAt: Date;
  humidity: number | null;
  id: string;
  reportTime: Date | null;
  temperature: number | null;
  updatedAt: Date;
  windSpeed: number | null;
};
