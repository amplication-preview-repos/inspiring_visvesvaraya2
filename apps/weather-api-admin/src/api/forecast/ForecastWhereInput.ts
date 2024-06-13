import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ForecastWhereInput = {
  city?: CityWhereUniqueInput;
  forecastTime?: DateTimeNullableFilter;
  humidity?: IntNullableFilter;
  id?: StringFilter;
  temperature?: FloatNullableFilter;
  windSpeed?: FloatNullableFilter;
};
