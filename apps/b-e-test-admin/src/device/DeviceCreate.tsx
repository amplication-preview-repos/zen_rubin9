import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DbcParsedDataTitle } from "../dbcParsedData/DbcParsedDataTitle";

export const DeviceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="dbcParsedDataItems"
          reference="DbcParsedData"
        >
          <SelectArrayInput
            optionText={DbcParsedDataTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="deviceName" source="deviceName" />
      </SimpleForm>
    </Create>
  );
};
