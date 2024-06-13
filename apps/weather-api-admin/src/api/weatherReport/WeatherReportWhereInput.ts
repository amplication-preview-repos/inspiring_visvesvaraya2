import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type WeatherReportWhereInput = {
  city?: CityWhereUniqueInput;
  humidity?: IntNullableFilter;
  id?: StringFilter;
  reportTime?: DateTimeNullableFilter;
  temperature?: FloatNullableFilter;
  windSpeed?: FloatNullableFilter;
};
