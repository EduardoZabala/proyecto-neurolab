import {Prisma, test} from "@prisma/client";

export interface ITestRepo {
    findById(
        id: string,
        tx?: Prisma.TransactionClient
    ) : Promise<test | null>;
    
    findByCode(
        code: string,
        tx?: Prisma.TransactionClient
    ) : Promise<test | null>;

    findMany(
    where?: Prisma.testWhereInput,
    tx?: Prisma.TransactionClient
    ): Promise<test[]>;
    
    create(
        data: Prisma.testCreateInput,
        tx?: Prisma.TransactionClient
    ): Promise<test>;
    
    update(
        id: string,
        data: Prisma.testUpdateInput,
        tx?: Prisma.TransactionClient
    ): Promise<test>;
    
    delete(
        id: string,
        tx?: Prisma.TransactionClient
    ): Promise<void>;
    
    count(
        where?: Prisma.testWhereInput,
        tx?: Prisma.TransactionClient
    ): Promise<number>;
}