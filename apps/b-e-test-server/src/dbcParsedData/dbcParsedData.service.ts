import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DbcParsedDataServiceBase } from "./base/dbcParsedData.service.base";

@Injectable()
export class DbcParsedDataService extends DbcParsedDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
