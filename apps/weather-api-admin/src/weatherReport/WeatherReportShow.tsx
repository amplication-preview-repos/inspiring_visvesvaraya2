import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CITY_TITLE_FIELD } from "../city/CityTitle";

export const WeatherReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
