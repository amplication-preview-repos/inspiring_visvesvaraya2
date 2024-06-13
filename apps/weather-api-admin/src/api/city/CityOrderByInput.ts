import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
