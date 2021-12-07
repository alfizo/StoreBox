import { PrismaService } from "nestjs-prisma";
import { Prisma, File, Receiving } from "@prisma/client";

export class FileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileFindManyArgs>
  ): Promise<number> {
    return this.prisma.file.count(args);
  }

  async findMany<T extends Prisma.FileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileFindManyArgs>
  ): Promise<File[]> {
    return this.prisma.file.findMany(args);
  }
  async findOne<T extends Prisma.FileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileFindUniqueArgs>
  ): Promise<File | null> {
    return this.prisma.file.findUnique(args);
  }
  async create<T extends Prisma.FileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileCreateArgs>
  ): Promise<File> {
    return this.prisma.file.create<T>(args);
  }
  async update<T extends Prisma.FileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileUpdateArgs>
  ): Promise<File> {
    return this.prisma.file.update<T>(args);
  }
  async delete<T extends Prisma.FileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileDeleteArgs>
  ): Promise<File> {
    return this.prisma.file.delete(args);
  }

  async getReceiving(parentId: string): Promise<Receiving | null> {
    return this.prisma.file
      .findUnique({
        where: { id: parentId },
      })
      .receiving();
  }
}
