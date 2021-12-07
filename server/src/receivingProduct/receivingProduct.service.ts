import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ReceivingProductServiceBase } from "./base/receivingProduct.service.base";

@Injectable()
export class ReceivingProductService extends ReceivingProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
