import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DBCCATEGORY_TITLE_FIELD } from "../dbcCategory/DbcCategoryTitle";

export const DbcParsedDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DbcParsedDataItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
