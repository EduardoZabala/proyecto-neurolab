export interface IEmailVerificationTokenRepo {
  findByToken(
    token: string,
    include?: any,
    tx?: any
  ): Promise<IEmailVerificationTokenRepo | null>;
  create(
    data: any,
    tx?: any
  ): Promise<any>;
  delete(id: string, tx?: any): Promise<void>;
  deleteMany(
    where: any,
    tx?: any
  ): Promise<void>;
}
