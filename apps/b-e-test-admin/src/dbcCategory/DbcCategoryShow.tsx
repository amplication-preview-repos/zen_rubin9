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
} from "react-admin";

import { DBCCATEGORY_TITLE_FIELD } from "./DbcCategoryTitle";

export const DbcCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="categoryName" source="categoryName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
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
            <ReferenceField
              label="DbcCategory"
              source="dbccategory.id"
              reference="DbcCategory"
            >
              <TextField source={DBCCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
