import { ForecastWhereUniqueInput } from "./ForecastWhereUniqueInput";
import { ForecastUpdateInput } from "./ForecastUpdateInput";

export type UpdateForecastArgs = {
  where: ForecastWhereUniqueInput;
  data: ForecastUpdateInput;
};
