import { DbcParsedDataUpdateManyWithoutFileImportLogsInput } from "./DbcParsedDataUpdateManyWithoutFileImportLogsInput";

export type FileImportLogUpdateInput = {
  dbcParsedDataItems?: DbcParsedDataUpdateManyWithoutFileImportLogsInput;
  fileName?: string | null;
  importStatus?: string | null;
  uploadDate?: Date | null;
};
