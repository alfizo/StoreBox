import { Module } from "@nestjs/common";
import { ReceivingModuleBase } from "./base/receiving.module.base";
import { ReceivingService } from "./receiving.service";
import { ReceivingController } from "./receiving.controller";
import { ReceivingResolver } from "./receiving.resolver";

@Module({
  imports: [ReceivingModuleBase],
  controllers: [ReceivingController],
  providers: [ReceivingService, ReceivingResolver],
  exports: [ReceivingService],
})
export class ReceivingModule {}
