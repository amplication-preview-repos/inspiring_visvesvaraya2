import { SortOrder } from "../../util/SortOrder";

export type WeatherReportOrderByInput = {
  cityId?: SortOrder;
  createdAt?: SortOrder;
  humidity?: SortOrder;
  id?: SortOrder;
  reportTime?: SortOrder;
  temperature?: SortOrder;
  updatedAt?: SortOrder;
  windSpeed?: SortOrder;
};
