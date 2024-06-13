import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CITY_TITLE_FIELD } from "../city/CityTitle";

export const WeatherReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WeatherReports"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
