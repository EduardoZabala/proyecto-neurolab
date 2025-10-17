import { IVerificationService } from "../../contracts/mail/IverificationService";

export class VerificationService implements IVerificationService {
    generateSecurePassword(): string {
        return "securePassword123!";
    }
    generateVerificationToken(): string {
        return "verificationTokenXYZ";
    }
    async verifyEmailToken(token: string): Promise<{ userId: string } | null> {
        if (token === "validToken") {
            return { userId: "userId123" };
        }
        return null;
    }

}