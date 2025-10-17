export interface EmailVerificationData {
  email: string
  name: string
  temporaryPassword: string
  verificationToken: string
}

export interface PasswordResetData {
  email: string
  name: string
  resetToken: string
}

export interface IEmailService {
  sendVerificationEmail(data: EmailVerificationData): Promise<void>
  sendPasswordResetEmail(data: PasswordResetData): Promise<void>
}