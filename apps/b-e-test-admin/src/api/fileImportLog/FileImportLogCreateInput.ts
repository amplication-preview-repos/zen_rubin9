import { DbcParsedDataCreateNestedManyWithoutFileImportLogsInput } from "./DbcParsedDataCreateNestedManyWithoutFileImportLogsInput";

export type FileImportLogCreateInput = {
  dbcParsedDataItems?: DbcParsedDataCreateNestedManyWithoutFileImportLogsInput;
  fileName?: string | null;
  importStatus?: string | null;
  uploadDate?: Date | null;
};
