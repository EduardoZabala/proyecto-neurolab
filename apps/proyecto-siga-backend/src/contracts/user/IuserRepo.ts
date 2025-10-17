import { Prisma, user } from "@prisma/client";


export interface IUserRepo {
  findById(id: string, tx?: Prisma.TransactionClient): Promise<user | null>;
  findByEmail(
    email: string,
    tx?: Prisma.TransactionClient
  ): Promise<user | null>;
  findMany(tx?: Prisma.TransactionClient): Promise<user[]>;
  create(
    data: Prisma.userCreateInput,
    tx?: Prisma.TransactionClient
  ): Promise<user>;
  update(
    id: string,
    data: Prisma.userUpdateInput,
    tx?: Prisma.TransactionClient
  ): Promise<user>;
  delete(id: string, tx?: Prisma.TransactionClient): Promise<void>;
  count(
    where: Prisma.userWhereInput,
    tx?: Prisma.TransactionClient
  ): Promise<number>;
}
