import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CITY_TITLE_FIELD } from "./CityTitle";

export const CityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="latitude" source="latitude" />
        <TextField label="longitude" source="longitude" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Forecast"
          target="cityId"
          label="Forecasts"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="City" source="city.id" reference="City">
              <TextField source={CITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="forecastTime" source="forecastTime" />
            <TextField label="humidity" source="humidity" />
            <TextField label="ID" source="id" />
            <TextField label="temperature" source="temperature" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="windSpeed" source="windSpeed" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WeatherReport"
          target="cityId"
          label="WeatherReports"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="City" source="city.id" reference="City">
              <TextField source={CITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="humidity" source="humidity" />
            <TextField label="ID" source="id" />
            <TextField label="reportTime" source="reportTime" />
            <TextField label="temperature" source="temperature" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="windSpeed" source="windSpeed" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
