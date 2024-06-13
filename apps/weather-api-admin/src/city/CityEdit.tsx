import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ForecastTitle } from "../forecast/ForecastTitle";
import { WeatherReportTitle } from "../weatherReport/WeatherReportTitle";

export const CityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <ReferenceArrayInput
          source="forecasts"
          reference="Forecast"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ForecastTitle} />
        </ReferenceArrayInput>
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="weatherReports"
          reference="WeatherReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WeatherReportTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
