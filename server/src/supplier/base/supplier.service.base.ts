import { PrismaService } from "nestjs-prisma";
import { Prisma, Supplier, Address } from "@prisma/client";

export class SupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SupplierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierFindManyArgs>
  ): Promise<number> {
    return this.prisma.supplier.count(args);
  }

  async findMany<T extends Prisma.SupplierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierFindManyArgs>
  ): Promise<Supplier[]> {
    return this.prisma.supplier.findMany(args);
  }
  async findOne<T extends Prisma.SupplierFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierFindUniqueArgs>
  ): Promise<Supplier | null> {
    return this.prisma.supplier.findUnique(args);
  }
  async create<T extends Prisma.SupplierCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierCreateArgs>
  ): Promise<Supplier> {
    return this.prisma.supplier.create<T>(args);
  }
  async update<T extends Prisma.SupplierUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierUpdateArgs>
  ): Promise<Supplier> {
    return this.prisma.supplier.update<T>(args);
  }
  async delete<T extends Prisma.SupplierDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupplierDeleteArgs>
  ): Promise<Supplier> {
    return this.prisma.supplier.delete(args);
  }

  async getAddress(parentId: string): Promise<Address | null> {
    return this.prisma.supplier
      .findUnique({
        where: { id: parentId },
      })
      .address();
  }
}
