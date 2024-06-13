import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";

export const WeatherReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="humidity" source="humidity" />
        <DateTimeInput label="reportTime" source="reportTime" />
        <NumberInput label="temperature" source="temperature" />
        <NumberInput label="windSpeed" source="windSpeed" />
      </SimpleForm>
    </Edit>
  );
};
