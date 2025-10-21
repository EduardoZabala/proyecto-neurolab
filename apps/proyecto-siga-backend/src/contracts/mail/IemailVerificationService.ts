export interface IEmailVerificationService {
  sendVerificationEmail(
    email: string,
    name: string,
    temporaryPassword: string,

  ): Promise<void>;
}
