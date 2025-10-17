import prisma from "@packages/libs/prisma";
import { IRefreshTokenRepo } from "../contracts/auth/IrefreshTokenRepo";
import { Prisma, refreshToken } from "@prisma/client";

export class RefreshTokenRepository implements IRefreshTokenRepo {
  async findById(jti: string, tx = prisma): Promise<refreshToken | null> {
    return tx.refreshToken.findUnique({ where: { jti } });
  }

  async create(
    data: Prisma.refreshTokenCreateInput,
    tx = prisma
  ): Promise<refreshToken> {
    return tx.refreshToken.create({ data });
  }

  async update(
    jti: string,
    data: Prisma.refreshTokenUpdateInput,
    tx = prisma
  ): Promise<refreshToken> {
    return tx.refreshToken.update({ where: { jti }, data });
  }

  async updateMany(
    where: Prisma.refreshTokenWhereInput,
    data: Prisma.refreshTokenUpdateInput,
    tx = prisma
  ): Promise<void> {
    await tx.refreshToken.updateMany({ where, data });
  }
}
