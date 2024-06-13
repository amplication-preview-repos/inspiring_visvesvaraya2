import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CityList } from "./city/CityList";
import { CityCreate } from "./city/CityCreate";
import { CityEdit } from "./city/CityEdit";
import { CityShow } from "./city/CityShow";
import { WeatherReportList } from "./weatherReport/WeatherReportList";
import { WeatherReportCreate } from "./weatherReport/WeatherReportCreate";
import { WeatherReportEdit } from "./weatherReport/WeatherReportEdit";
import { WeatherReportShow } from "./weatherReport/WeatherReportShow";
import { ForecastList } from "./forecast/ForecastList";
import { ForecastCreate } from "./forecast/ForecastCreate";
import { ForecastEdit } from "./forecast/ForecastEdit";
import { ForecastShow } from "./forecast/ForecastShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WeatherAPI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="City"
          list={CityList}
          edit={CityEdit}
          create={CityCreate}
          show={CityShow}
        />
        <Resource
          name="WeatherReport"
          list={WeatherReportList}
          edit={WeatherReportEdit}
          create={WeatherReportCreate}
          show={WeatherReportShow}
        />
        <Resource
          name="Forecast"
          list={ForecastList}
          edit={ForecastEdit}
          create={ForecastCreate}
          show={ForecastShow}
        />
      </Admin>
    </div>
  );
};

export default App;
