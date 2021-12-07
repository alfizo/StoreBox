import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FileServiceBase } from "./base/file.service.base";

@Injectable()
export class FileService extends FileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
