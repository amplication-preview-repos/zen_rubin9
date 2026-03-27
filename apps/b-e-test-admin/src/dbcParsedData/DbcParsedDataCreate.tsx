import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

import { DbcCategoryTitle } from "../dbcCategory/DbcCategoryTitle";
import { DeviceTitle } from "../device/DeviceTitle";
import { FileImportLogTitle } from "../fileImportLog/FileImportLogTitle";
import { UserTitle } from "../user/UserTitle";

export const DbcParsedDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CodeName" source="codeName" />
        <TextInput label="CodeValue" source="codeValue" />
        <TextInput label="dataType" source="dataType" />
        <ReferenceInput
          source="dbcCategory.id"
          reference="DbcCategory"
          label="DbcCategory"
        >
          <SelectInput optionText={DbcCategoryTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="device.id" reference="Device" label="Device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="fileImportLog.id"
          reference="FileImportLog"
          label="FileImportLog"
        >
          <SelectInput optionText={FileImportLogTitle} />
        </ReferenceInput>
        <TextInput label="rawData" multiline source="rawData" />
        <NumberInput step={1} label="sourceLine" source="sourceLine" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <BooleanInput label="valid" source="valid" />
      </SimpleForm>
    </Create>
  );
};
