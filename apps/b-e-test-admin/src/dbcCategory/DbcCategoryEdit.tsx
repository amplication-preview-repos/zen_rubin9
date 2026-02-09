import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DbcParsedDataTitle } from "../dbcParsedData/DbcParsedDataTitle";

export const DbcCategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="categoryName" source="categoryName" />
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
      </SimpleForm>
    </Edit>
  );
};
