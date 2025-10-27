import { Prisma, test } from "@prisma/client";
import prisma from '@packages/libs/prisma'
import { ITestRepo } from "../contracts/test/itestRepo";


export class TestRepository implements ITestRepo {
  async findById(id: string, tx = prisma): Promise<test | null> {
    return tx.test.findUnique({where: { testId: id }});
  }

  async findByCode(code: string, tx = prisma): Promise<test | null> {
    return tx.test.findUnique({where: { testCode: code }});
  }

  async findMany(where?: Prisma.testWhereInput, tx = prisma): Promise<test[]> {
    return tx.test.findMany({where});
  }

  async create(data: Prisma.testCreateInput,tx = prisma): Promise<test> {
    return tx.test.create({ data });
  }

  async update( id: string, data: Prisma.testUpdateInput, tx = prisma): Promise<test> {
    return tx.test.update({ where: { testId: id }, data });
  }

  async delete(id: string, tx = prisma): Promise<void> {
    await tx.test.delete({ where: { testId: id } });
  }

  async count(where?: Prisma.testWhereInput, tx = prisma ): Promise<number> {
    return tx.test.count({ where });
  }
}