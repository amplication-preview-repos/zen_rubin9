import { DbcCategoryWhereUniqueInput } from "../dbcCategory/DbcCategoryWhereUniqueInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { FileImportLogWhereUniqueInput } from "../fileImportLog/FileImportLogWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DbcParsedDataUpdateInput = {
  codeName?: string | null;
  codeValue?: string | null;
  dataType?: string | null;
  dbcCategory?: DbcCategoryWhereUniqueInput | null;
  description?: string | null;
  device?: DeviceWhereUniqueInput | null;
  fileImportLog?: FileImportLogWhereUniqueInput | null;
  rawData?: string | null;
  sourceLine?: number | null;
  user?: UserWhereUniqueInput | null;
  valid?: boolean | null;
};
