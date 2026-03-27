import { DbcParsedData } from "../dbcParsedData/DbcParsedData";

export type FileImportLog = {
  createdAt: Date;
  dbcParsedDataItems?: Array<DbcParsedData>;
  fileName: string | null;
  id: string;
  importStatus: string | null;
  updatedAt: Date;
  uploadDate: Date | null;
};
