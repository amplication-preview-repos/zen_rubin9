import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DbcCategoryServiceBase } from "./base/dbcCategory.service.base";

@Injectable()
export class DbcCategoryService extends DbcCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
