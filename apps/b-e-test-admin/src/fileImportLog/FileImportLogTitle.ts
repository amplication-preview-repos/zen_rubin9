import { FileImportLog as TFileImportLog } from "../api/fileImportLog/FileImportLog";

export const FILEIMPORTLOG_TITLE_FIELD = "fileName";

export const FileImportLogTitle = (record: TFileImportLog): string => {
  return record.fileName?.toString() || String(record.id);
};
