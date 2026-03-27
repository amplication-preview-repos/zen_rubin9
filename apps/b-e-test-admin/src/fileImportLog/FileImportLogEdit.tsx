import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { DbcParsedDataTitle } from "../dbcParsedData/DbcParsedDataTitle";

export const FileImportLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <TextInput label="fileName" source="fileName" />
        <TextInput label="importStatus" source="importStatus" />
        <DateTimeInput label="uploadDate" source="uploadDate" />
      </SimpleForm>
    </Edit>
  );
};
