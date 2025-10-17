import { Prisma, user } from '@prisma/client'
import prisma from '@packages/libs/prisma'
import { IUserRepo } from '../contracts/user/IuserRepo' 

export class UserRepository implements IUserRepo {
  async findById(id: string, tx = prisma): Promise<user | null> {
    return tx.user.findUnique({ where: { userId: id } })
  }

  async findByEmail(email: string, tx = prisma): Promise<user | null> {
    return tx.user.findUnique({ where: { email } })
  }

  async findMany(tx = prisma): Promise<user[]> {
    return tx.user.findMany({ orderBy: { createdAt: 'desc' } })
  }

  async create(data: Prisma.userCreateInput, tx = prisma): Promise<user> {
    return tx.user.create({ data })
  }

  async update(id: string, data: Prisma.userUpdateInput, tx = prisma): Promise<user> {
    return tx.user.update({ where: { userId: id }, data })
  }

  async delete(id: string, tx = prisma): Promise<void> {
    await tx.user.delete({ where: { userId: id } })
  }

  async count(where: Prisma.userWhereInput, tx = prisma): Promise<number> {
    return tx.user.count({ where })
  }
}