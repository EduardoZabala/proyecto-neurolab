import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";
import {
  IAuthService,
  UserAuth,
  LoginCredentials,
  LoginResult,
  UserProfile,
} from "../../contracts/auth/IauthService";
import type { IUserRepo } from "../../contracts/user/IuserRepo";
import { Unauthorized, BadRequest } from "../../utils/httpError";
import { checkPassword } from "../../security/passwordPolicy";
import { User } from "../../contracts";

@injectable()
export class AuthService implements IAuthService {
  constructor(@inject("UserRepo") private readonly userRepo: IUserRepo) {}

  async login(email: string, password: string): Promise<LoginResult> {
    const credentials: LoginCredentials = { email, password };
    const user = await this.validateCredentials(credentials);
    return {
      token: "",
      user: {
        userId: user.userId,
        userNumber: user.userNumber,
        email: user.email,
        name: user.name || "",
        role: user.role,
        gender: user.gender || "",
        isActive: user.isActive,
      },
    };
  }

  async validateCredentials(credentials: LoginCredentials): Promise<User> {
    const user = await this.userRepo.findByEmail(credentials.email);

    if (!user) {
      throw Unauthorized("Credenciales inválidas");
    }

    // Check if account is unverified (inactive)
    if (!user.isActive) {
      throw Unauthorized(
        "Esta cuenta no está activada"
      );
    }
    const isValidPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isValidPassword) {
      throw Unauthorized("Credenciales inválidas");
    }

    return {
      userId: user.userId,
      userNumber: user.userNumber,
      email: user.email,
      name: user.name || "",
      role: user.role,
      isActive: user.isActive,
    };
  }

  async getUserById(userId: string): Promise<UserAuth | null> {
    return this.userRepo.findById(userId) as Promise<UserAuth | null>;
  }

  async getUserProfile(userId: string): Promise<UserProfile> {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw Unauthorized("Usuario no encontrado");
    }
    return {
      userId: user.userId,
      userNumber: user.userNumber,
      email: user.email,
      name: user.name,
      role: user.role,
      gender: user.gender || "",
      createdAt: user.createdAt,
    };
  }

  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string
  ): Promise<void> {
    // Validate current password and get user
    const user = await this.getUserById(userId);
    if (!user) {
      throw Unauthorized("Usuario no encontrado");
    }

    const isValidPassword = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isValidPassword) {
      throw Unauthorized("Contraseña actual incorrecta");
    }

    // Validate new password with security policies
    const passwordErrors = await checkPassword(newPassword, user.email);
    if (passwordErrors.length > 0) {
      throw BadRequest(passwordErrors.join(". "));
    }

    // Hash new password
    const saltRounds = process.env.BCRYPT_SALT_ROUNDS
      ? Number(process.env.BCRYPT_SALT_ROUNDS)
      : 10;
    const newPasswordHash = await bcrypt.hash(newPassword, saltRounds);

    await this.userRepo.update(user.userId, {
      password: newPasswordHash,
      tokenVersion: { increment: 1 },
    });
  }

  async validateToken(userId: string, tokenVersion: number): Promise<boolean> {
    try {
      const user = await this.userRepo.findById(userId);

      if (!user || !user.isActive) {
        return false;
      }

      return user.tokenVersion === tokenVersion;
    } catch (error) {
      return false;
    }
  }
}
