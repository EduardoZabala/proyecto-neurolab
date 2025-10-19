import { randomBytes } from "crypto";
import { IVerificationService } from "../../contracts/mail/IverificationService";
import jwt from "jsonwebtoken";
import { fail } from "assert";
export class VerificationService implements IVerificationService {
  generateSecurePassword(): string {
    const chars =
      "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  generateVerificationToken(): string {
    return randomBytes(32).toString("hex");
  }
  async verifyEmailToken(token: string): Promise<{ userId: string } | null> {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
      return { userId: decoded.userId }
    } catch (error) {
      return fail("Token inválido o expirado");
    }
  }
}
