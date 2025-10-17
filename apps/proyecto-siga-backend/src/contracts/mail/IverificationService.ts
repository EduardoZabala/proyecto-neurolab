export interface IVerificationService {
  generateSecurePassword(): string;
  generateVerificationToken(): string;
  verifyEmailToken(token: string): Promise<{ userId: string } | null>;
}
