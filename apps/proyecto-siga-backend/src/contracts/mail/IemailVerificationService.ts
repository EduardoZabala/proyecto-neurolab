export interface IEmailVerificationService {
  sendVerificationEmail(
    email: string,
    name: string,
    temporaryPassword: string,
    verificationToken: string,

  ): Promise<void>;
}
