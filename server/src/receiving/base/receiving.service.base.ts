import { PrismaService } from "nestjs-prisma";
import { Prisma, Receiving, File, User } from "@prisma/client";

export class ReceivingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReceivingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingFindManyArgs>
  ): Promise<number> {
    return this.prisma.receiving.count(args);
  }

  async findMany<T extends Prisma.ReceivingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingFindManyArgs>
  ): Promise<Receiving[]> {
    return this.prisma.receiving.findMany(args);
  }
  async findOne<T extends Prisma.ReceivingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingFindUniqueArgs>
  ): Promise<Receiving | null> {
    return this.prisma.receiving.findUnique(args);
  }
  async create<T extends Prisma.ReceivingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingCreateArgs>
  ): Promise<Receiving> {
    return this.prisma.receiving.create<T>(args);
  }
  async update<T extends Prisma.ReceivingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingUpdateArgs>
  ): Promise<Receiving> {
    return this.prisma.receiving.update<T>(args);
  }
  async delete<T extends Prisma.ReceivingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReceivingDeleteArgs>
  ): Promise<Receiving> {
    return this.prisma.receiving.delete(args);
  }

  async findFiles(
    parentId: string,
    args: Prisma.FileFindManyArgs
  ): Promise<File[]> {
    return this.prisma.receiving
      .findUnique({
        where: { id: parentId },
      })
      .files(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.receiving
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
