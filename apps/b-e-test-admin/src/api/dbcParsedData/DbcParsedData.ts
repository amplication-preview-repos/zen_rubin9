import { DbcCategory } from "../dbcCategory/DbcCategory";
import { Device } from "../device/Device";
import { FileImportLog } from "../fileImportLog/FileImportLog";
import { User } from "../user/User";

export type DbcParsedData = {
  codeName: string | null;
  codeValue: string | null;
  createdAt: Date;
  dataType: string | null;
  dbcCategory?: DbcCategory | null;
  description: string | null;
  device?: Device | null;
  fileImportLog?: FileImportLog | null;
  id: string;
  rawData: string | null;
  sourceLine: number | null;
  updatedAt: Date;
  user?: User | null;
  valid: boolean | null;
};
