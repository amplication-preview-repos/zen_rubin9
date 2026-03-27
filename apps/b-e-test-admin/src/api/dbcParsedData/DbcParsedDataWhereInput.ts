import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DbcCategoryWhereUniqueInput } from "../dbcCategory/DbcCategoryWhereUniqueInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { FileImportLogWhereUniqueInput } from "../fileImportLog/FileImportLogWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DbcParsedDataWhereInput = {
  codeName?: StringNullableFilter;
  codeValue?: StringNullableFilter;
  dataType?: StringNullableFilter;
  dbcCategory?: DbcCategoryWhereUniqueInput;
  description?: StringNullableFilter;
  device?: DeviceWhereUniqueInput;
  fileImportLog?: FileImportLogWhereUniqueInput;
  id?: StringFilter;
  rawData?: StringNullableFilter;
  sourceLine?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  valid?: BooleanNullableFilter;
};
