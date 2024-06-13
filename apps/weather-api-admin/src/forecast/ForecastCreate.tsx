import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";

export const ForecastCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <DateTimeInput label="forecastTime" source="forecastTime" />
        <NumberInput step={1} label="humidity" source="humidity" />
        <NumberInput label="temperature" source="temperature" />
        <NumberInput label="windSpeed" source="windSpeed" />
      </SimpleForm>
    </Create>
  );
};
