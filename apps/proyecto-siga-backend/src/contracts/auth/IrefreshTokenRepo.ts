import { Prisma, refreshToken } from "@prisma/client";


export interface IRefreshTokenRepo {
  findById(
    jti: string,
    tx?: Prisma.TransactionClient
  ): Promise<refreshToken | null>;
  create(
    data: Prisma.refreshTokenCreateInput,
    tx?: Prisma.TransactionClient
  ): Promise<refreshToken>;
  update(
    jti: string,
    data: Prisma.refreshTokenUpdateInput,
    tx?: Prisma.TransactionClient
  ): Promise<refreshToken>;
  updateMany(
    where: Prisma.refreshTokenWhereInput,
    data: Prisma.refreshTokenUpdateInput,
    tx?: Prisma.TransactionClient
  ): Promise<void>;
}
