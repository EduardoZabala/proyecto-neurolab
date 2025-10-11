import { Router } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "@packages/libs/prisma";
import { auth, AuthedRequest } from "../middleware/auth";
import { wrap } from "../middleware/async";
import { Unauthorized } from "../utils/httpError";
import { tokenService } from "../security/TokenService";
import { checkPassword } from "../security/passwordPolicy";
import { verifyRefreshToken } from "../utils/jwt";
import { ok } from "../utils/jsonResponse";
export const AuthController = Router();

// Validation schemas
const LoginDto = z.object({
  email: z
    .string()
    .min(3)
    .trim()
    .transform((s) => s.toLowerCase()),
  password: z.string().min(6),
});

const RefreshDto = z.object({
  refreshToken: z.string().min(10),
});

const LogoutDto = z.object({
  refreshToken: z.string().min(10),
});

const ChangePasswordDto = z.object({
  currentPassword: z.string().min(1, "Contraseña actual requerida"),
  newPassword: z
    .string()
    .min(6, "La nueva contraseña debe tener al menos 6 caracteres"),
});

const validateUserCredentials = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw Unauthorized("Credenciales inválidas");
  }

  // const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  // if (!isValidPassword) {
  //   throw Unauthorized("Credenciales inválidas");
  // }

  return user;
};

const createUserResponse = (user: any) => ({
  id: user.id,
  email: user.email,
  role: user.role,
  name: user.name,
});

const validateCurrentPassword = async (
  userId: string,
  currentPassword: string
) => {
  const user = await prisma.user.findUnique({ where: { userId: userId } });
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
  return user;
};

const validateAndHashNewPassword = async (
  newPassword: string,
  email: string
) => {
  const passwordErrors = await checkPassword(newPassword, email);
  if (passwordErrors.length > 0) {
    throw { status: 400, message: passwordErrors.join(". ") };
  }
  const saltRounds = 12; // Could be from env var
  return bcrypt.hash(newPassword, saltRounds);
};

const parseRefreshToken = (refreshToken: string) => {
  const parts = refreshToken.split(".");
  if (parts.length !== 3) {
    throw Unauthorized("Refresh token inválido");
  }
  return refreshToken;
};

// Routes
AuthController.post(
  "/login",
  wrap(async (req, res) => {
    const { email, password } = LoginDto.parse(req.body);

    const user = await validateUserCredentials(email, password);

    const tokenPair = await tokenService.issuePair(
      user.userId,
      req.headers["user-agent"] as string,
      req.ip
    );

    ok(res, {
      accessToken: tokenPair.accessToken,
      refreshToken: tokenPair.refreshToken,
      user: createUserResponse(user),
    });
  })
);

AuthController.post(
  "/refresh",
  wrap(async (req, res) => {
    const { refreshToken } = RefreshDto.parse(req.body);

    const tokenPair = await tokenService.rotateRefresh(
      refreshToken,
      req.headers["user-agent"] as string,
      req.ip
    );

    ok(res, {
      accessToken: tokenPair.accessToken,
      refreshToken: tokenPair.refreshToken,
    });
  })
);

AuthController.post(
  "/logout",
  wrap(async (req, res) => {
    const { refreshToken } = LogoutDto.parse(req.body);

    const validRefreshToken = parseRefreshToken(refreshToken);

    const payload = verifyRefreshToken(validRefreshToken);
    
    if (!payload) {
      throw Unauthorized("Refresh token inválido");
    }
    if (!payload.jti) {
      throw Unauthorized("Refresh token inválido");
    }

    await tokenService.revoke(payload.jti);

    return ok(res, null, "Logout exitoso");
  })
);

AuthController.post(
  "/logout-all",
  auth,
  wrap(async (req: AuthedRequest, res) => {
    await tokenService.revokeAllForUser(req.user!.id);
    return ok(res, null, "Logout exitoso");
  })
);

AuthController.get(
  "/me",
  auth,
  wrap(async (req: AuthedRequest, res) => {
    const user = await prisma.user.findUnique({
      where: { userId: req.user!.id },
      select: {
        userId: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        tokenVersion: true,
      },
    });

    if (!user) {
      throw Unauthorized("Usuario no encontrado");
    }
    ok(res, user); 
})
);

AuthController.put(
  "/change-password",
  auth,
  wrap(async (req: AuthedRequest, res) => {
    const { currentPassword, newPassword } = ChangePasswordDto.parse(req.body);
    const user = await validateCurrentPassword(req.user!.id, currentPassword);
    const newPasswordHash = await validateAndHashNewPassword(
      newPassword,
      user.email
    );

    await prisma.user.update({
      where: { userId : user.userId },
      data: {
        password: newPasswordHash,
        tokenVersion: { increment: 1 },
      },
    });

    await tokenService.revokeAllForUser(user.userId);
    ok(res, null, "Contraseña cambiada con éxito");
  })
);
