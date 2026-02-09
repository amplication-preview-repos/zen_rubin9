import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DbcCategoryTitle } from "../dbcCategory/DbcCategoryTitle";

export const DbcParsedDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CodeName" source="codeName" />
        <TextInput label="CodeValue" source="codeValue" />
        <ReferenceInput
          source="dbcCategory.id"
          reference="DbcCategory"
          label="DbcCategory"
        >
          <SelectInput optionText={DbcCategoryTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
