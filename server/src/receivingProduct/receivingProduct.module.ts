import { Module } from "@nestjs/common";
import { ReceivingProductModuleBase } from "./base/receivingProduct.module.base";
import { ReceivingProductService } from "./receivingProduct.service";
import { ReceivingProductController } from "./receivingProduct.controller";
import { ReceivingProductResolver } from "./receivingProduct.resolver";

@Module({
  imports: [ReceivingProductModuleBase],
  controllers: [ReceivingProductController],
  providers: [ReceivingProductService, ReceivingProductResolver],
  exports: [ReceivingProductService],
})
export class ReceivingProductModule {}
