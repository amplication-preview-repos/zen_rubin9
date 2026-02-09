import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DbcCategoryList } from "./dbcCategory/DbcCategoryList";
import { DbcCategoryCreate } from "./dbcCategory/DbcCategoryCreate";
import { DbcCategoryEdit } from "./dbcCategory/DbcCategoryEdit";
import { DbcCategoryShow } from "./dbcCategory/DbcCategoryShow";
import { DbcParsedDataList } from "./dbcParsedData/DbcParsedDataList";
import { DbcParsedDataCreate } from "./dbcParsedData/DbcParsedDataCreate";
import { DbcParsedDataEdit } from "./dbcParsedData/DbcParsedDataEdit";
import { DbcParsedDataShow } from "./dbcParsedData/DbcParsedDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"b_e_test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DbcCategory"
          list={DbcCategoryList}
          edit={DbcCategoryEdit}
          create={DbcCategoryCreate}
          show={DbcCategoryShow}
        />
        <Resource
          name="DbcParsedData"
          list={DbcParsedDataList}
          edit={DbcParsedDataEdit}
          create={DbcParsedDataCreate}
          show={DbcParsedDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
