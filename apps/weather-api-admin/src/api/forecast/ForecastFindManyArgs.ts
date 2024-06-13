import { ForecastWhereInput } from "./ForecastWhereInput";
import { ForecastOrderByInput } from "./ForecastOrderByInput";

export type ForecastFindManyArgs = {
  where?: ForecastWhereInput;
  orderBy?: Array<ForecastOrderByInput>;
  skip?: number;
  take?: number;
};
