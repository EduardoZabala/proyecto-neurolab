import { sendEmail } from "../../utils/sendEmail";
import { IEmailVerificationService } from "../../contracts/mail/IemailVerificationService";
export class EmailVerificationService implements IEmailVerificationService {
  async sendVerificationEmail(
    email: string,
    name: string,
    temporaryPassword: string,
  ): Promise<void> {
    const subject = "Verificación de correo electrónico";
    const templateName = "verify-email";
    const data = {
      name,
      temporaryPassword
    };

    await sendEmail(email, subject, templateName, data);
  }
}
