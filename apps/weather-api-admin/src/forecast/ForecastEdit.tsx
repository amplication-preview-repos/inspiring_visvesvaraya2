import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";

export const ForecastEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <DateTimeInput label="forecastTime" source="forecastTime" />
        <NumberInput step={1} label="humidity" source="humidity" />
        <NumberInput label="temperature" source="temperature" />
        <NumberInput label="windSpeed" source="windSpeed" />
      </SimpleForm>
    </Edit>
  );
};
