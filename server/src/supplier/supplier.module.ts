import { Module } from "@nestjs/common";
import { SupplierModuleBase } from "./base/supplier.module.base";
import { SupplierService } from "./supplier.service";
import { SupplierController } from "./supplier.controller";
import { SupplierResolver } from "./supplier.resolver";

@Module({
  imports: [SupplierModuleBase],
  controllers: [SupplierController],
  providers: [SupplierService, SupplierResolver],
  exports: [SupplierService],
})
export class SupplierModule {}
