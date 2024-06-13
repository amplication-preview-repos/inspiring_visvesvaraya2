import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";

export const WeatherReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="humidity" source="humidity" />
        <DateTimeInput label="reportTime" source="reportTime" />
        <NumberInput label="temperature" source="temperature" />
        <NumberInput label="windSpeed" source="windSpeed" />
      </SimpleForm>
    </Create>
  );
};
