import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DbcCategoryTitle } from "../dbcCategory/DbcCategoryTitle";

export const DbcParsedDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
