import { Module } from "@nestjs/common";
import { DbcParsedDataModuleBase } from "./base/dbcParsedData.module.base";
import { DbcParsedDataService } from "./dbcParsedData.service";
import { DbcParsedDataController } from "./dbcParsedData.controller";
import { DbcParsedDataResolver } from "./dbcParsedData.resolver";

@Module({
  imports: [DbcParsedDataModuleBase],
  controllers: [DbcParsedDataController],
  providers: [DbcParsedDataService, DbcParsedDataResolver],
  exports: [DbcParsedDataService],
})
export class DbcParsedDataModule {}
