import { SortOrder } from "../../util/SortOrder";

export type FileImportLogOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  importStatus?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};
