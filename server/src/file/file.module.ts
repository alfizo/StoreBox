import { Module } from "@nestjs/common";
import { FileModuleBase } from "./base/file.module.base";
import { FileService } from "./file.service";
import { FileController } from "./file.controller";
import { FileResolver } from "./file.resolver";

@Module({
  imports: [FileModuleBase],
  controllers: [FileController],
  providers: [FileService, FileResolver],
  exports: [FileService],
})
export class FileModule {}
