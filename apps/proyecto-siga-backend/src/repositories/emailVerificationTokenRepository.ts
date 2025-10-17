import { IEmailVerificationTokenRepo } from "../contracts/mail/IemailVerificationTokenRepo";

export class EmailVerificationTokenRepository implements IEmailVerificationTokenRepo {
  async findByToken(
    token: string,
    include: any = {},
    tx?: any
  ): Promise<any | null> {
    return tx.emailVerificationToken.findUnique({
      where: { token },
      include,
    });
  }

  async create(
    data: any,
    tx?: any
  ): Promise<any> {
    return tx.emailVerificationToken.create({ data });
  }

  async delete(id: string, tx?: any): Promise<void> {
    await tx.emailVerificationToken.delete({ where: { id } });
  }

  async deleteMany(
    where: any,
    tx?: any
  ): Promise<void> {
    await tx.emailVerificationToken.deleteMany({ where });
  }
}