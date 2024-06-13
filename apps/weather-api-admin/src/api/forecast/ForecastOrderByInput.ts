import { SortOrder } from "../../util/SortOrder";

export type ForecastOrderByInput = {
  cityId?: SortOrder;
  createdAt?: SortOrder;
  forecastTime?: SortOrder;
  humidity?: SortOrder;
  id?: SortOrder;
  temperature?: SortOrder;
  updatedAt?: SortOrder;
  windSpeed?: SortOrder;
};
