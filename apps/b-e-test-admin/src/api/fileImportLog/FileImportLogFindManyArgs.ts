import { FileImportLogWhereInput } from "./FileImportLogWhereInput";
import { FileImportLogOrderByInput } from "./FileImportLogOrderByInput";

export type FileImportLogFindManyArgs = {
  where?: FileImportLogWhereInput;
  orderBy?: Array<FileImportLogOrderByInput>;
  skip?: number;
  take?: number;
};
