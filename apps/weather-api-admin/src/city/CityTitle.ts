import { City as TCity } from "../api/city/City";

export const CITY_TITLE_FIELD = "name";

export const CityTitle = (record: TCity): string => {
  return record.name?.toString() || String(record.id);
};
