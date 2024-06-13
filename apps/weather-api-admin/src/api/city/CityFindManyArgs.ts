import { CityWhereInput } from "./CityWhereInput";
import { CityOrderByInput } from "./CityOrderByInput";

export type CityFindManyArgs = {
  where?: CityWhereInput;
  orderBy?: Array<CityOrderByInput>;
  skip?: number;
  take?: number;
};
