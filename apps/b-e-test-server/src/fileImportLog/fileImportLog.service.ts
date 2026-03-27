import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FileImportLogServiceBase } from "./base/fileImportLog.service.base";

@Injectable()
export class FileImportLogService extends FileImportLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
