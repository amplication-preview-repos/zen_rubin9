import { Module } from "@nestjs/common";
import { FileImportLogModuleBase } from "./base/fileImportLog.module.base";
import { FileImportLogService } from "./fileImportLog.service";
import { FileImportLogController } from "./fileImportLog.controller";
import { FileImportLogResolver } from "./fileImportLog.resolver";

@Module({
  imports: [FileImportLogModuleBase],
  controllers: [FileImportLogController],
  providers: [FileImportLogService, FileImportLogResolver],
  exports: [FileImportLogService],
})
export class FileImportLogModule {}
