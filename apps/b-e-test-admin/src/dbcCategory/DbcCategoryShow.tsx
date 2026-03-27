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
  BooleanField,
} from "react-admin";

import { DBCCATEGORY_TITLE_FIELD } from "./DbcCategoryTitle";
import { DEVICE_TITLE_FIELD } from "../device/DeviceTitle";
import { FILEIMPORTLOG_TITLE_FIELD } from "../fileImportLog/FileImportLogTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DbcCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="categoryName" source="categoryName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DbcParsedData"
          target="dbcCategoryId"
          label="DbcParsedDataItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="CodeName" source="codeName" />
            <TextField label="CodeValue" source="codeValue" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dataType" source="dataType" />
            <ReferenceField
              label="DbcCategory"
              source="dbccategory.id"
              reference="DbcCategory"
            >
              <TextField source={DBCCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Device"
              source="device.id"
              reference="Device"
            >
              <TextField source={DEVICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="FileImportLog"
              source="fileimportlog.id"
              reference="FileImportLog"
            >
              <TextField source={FILEIMPORTLOG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="rawData" source="rawData" />
            <TextField label="sourceLine" source="sourceLine" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="valid" source="valid" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
