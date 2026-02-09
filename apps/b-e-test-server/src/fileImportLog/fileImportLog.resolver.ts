import * as graphql from "@nestjs/graphql";
import { FileImportLogResolverBase } from "./base/fileImportLog.resolver.base";
import { FileImportLog } from "./base/FileImportLog";
import { FileImportLogService } from "./fileImportLog.service";

@graphql.Resolver(() => FileImportLog)
export class FileImportLogResolver extends FileImportLogResolverBase {
  constructor(protected readonly service: FileImportLogService) {
    super(service);
  }
}
