import { EmailVerificationData, IEmailService, PasswordResetData } from "../../contracts/mail/IemailService"

export class EmailService implements IEmailService {
  async sendVerificationEmail(data: EmailVerificationData): Promise<void> {
    // Implement email sending logic here
    console.log(`Sending verification email to ${data.email}`);
    // You can use nodemailer or any email service provider here
  }

  async sendPasswordResetEmail(data: PasswordResetData): Promise<void> {
    // Implement email sending logic here
    console.log(`Sending password reset email to ${data.email}`);
    // You can use nodemailer or any email service provider here
  }
}