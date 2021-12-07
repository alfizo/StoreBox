import { PrismaService } from "nestjs-prisma";
import { Prisma, ReceivingProduct } from "@prisma/client";

export class ReceivingProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReceivingProductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingProductFindManyArgs>
  ): Promise<number> {
    return this.prisma.receivingProduct.count(args);
  }

  async findMany<T extends Prisma.ReceivingProductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingProductFindManyArgs>
  ): Promise<ReceivingProduct[]> {
    return this.prisma.receivingProduct.findMany(args);
  }
  async findOne<T extends Prisma.ReceivingProductFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingProductFindUniqueArgs>
  ): Promise<ReceivingProduct | null> {
    return this.prisma.receivingProduct.findUnique(args);
  }
  async create<T extends Prisma.ReceivingProductCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingProductCreateArgs>
  ): Promise<ReceivingProduct> {
    return this.prisma.receivingProduct.create<T>(args);
  }
  async update<T extends Prisma.ReceivingProductUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingProductUpdateArgs>
  ): Promise<ReceivingProduct> {
    return this.prisma.receivingProduct.update<T>(args);
  }
  async delete<T extends Prisma.ReceivingProductDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingProductDeleteArgs>
  ): Promise<ReceivingProduct> {
    return this.prisma.receivingProduct.delete(args);
  }
}
