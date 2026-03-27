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
import { FileImportLogList } from "./fileImportLog/FileImportLogList";
import { FileImportLogCreate } from "./fileImportLog/FileImportLogCreate";
import { FileImportLogEdit } from "./fileImportLog/FileImportLogEdit";
import { FileImportLogShow } from "./fileImportLog/FileImportLogShow";
import { DeviceList } from "./device/DeviceList";
import { DeviceCreate } from "./device/DeviceCreate";
import { DeviceEdit } from "./device/DeviceEdit";
import { DeviceShow } from "./device/DeviceShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        <Resource
          name="FileImportLog"
          list={FileImportLogList}
          edit={FileImportLogEdit}
          create={FileImportLogCreate}
          show={FileImportLogShow}
        />
        <Resource
          name="Device"
          list={DeviceList}
          edit={DeviceEdit}
          create={DeviceCreate}
          show={DeviceShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
