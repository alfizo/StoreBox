import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ReceivingServiceBase } from "./base/receiving.service.base";

@Injectable()
export class ReceivingService extends ReceivingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
