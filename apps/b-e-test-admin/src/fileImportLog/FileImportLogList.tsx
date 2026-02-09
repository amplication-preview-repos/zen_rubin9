import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FileImportLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FileImportLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="ID" source="id" />
        <TextField label="importStatus" source="importStatus" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadDate" source="uploadDate" />{" "}
      </Datagrid>
    </List>
  );
};
