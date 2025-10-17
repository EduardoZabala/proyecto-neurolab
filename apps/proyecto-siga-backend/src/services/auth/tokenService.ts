import { inject, injectable } from "tsyringe";
import { v4 as uuid } from "uuid";
import { add } from "date-fns";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../../utils/jwt";
import { Unauthorized } from "../../utils/httpError";
import type {
  IUserRepo,
} from "../../contracts/user/IuserRepo";
import  type {
  IRefreshTokenRepo
} from "../../contracts/auth/IrefreshTokenRepo";
import { IRefreshTokenService } from "../../contracts/auth/IrefreshTokenService";

const parseTTL = (s?: string) => {
  const fallback = { days: 30 };
  if (!s) return fallback;
  const m = /^(\d+)([smhd])$/.exec(s);
  if (!m) return fallback;
  const n = Math.max(Number(m[1]), 1);
  switch (m[2]) {
    case "s":
      return { seconds: n };
    case "m":
      return { minutes: n };
    case "h":
      return { hours: n };
    default:
      return { days: n };
  }
};

@injectable()
export class TokenService implements IRefreshTokenService {
  constructor(
    @inject("UserRepo") private readonly userRepo: IUserRepo,
    @inject("RefreshTokenRepo")
    private readonly refreshTokenRepo: IRefreshTokenRepo
  ) {}

  private async generateTokens(
    user: { userId: string; role: string; email: string; tokenVersion: number | null },
    ua?: string,
    ip?: string
  ) {
    const jti = uuid();
    const refreshTtl = parseTTL(process.env.REFRESH_TOKEN_TTL);
    const expiresAt = add(new Date(), refreshTtl);

    await this.refreshTokenRepo.create({
      jti,
      user: { connect: { userId: user.userId } },
      expiresAt,
      userAgent: ua,
      ip,
    });

    const accessToken = signAccessToken({
      sub: user.userId,
      role: user.role,
      email: user.email,
      tokenVersion: user.tokenVersion || 0,
    });
    const refreshToken = signRefreshToken({
      sub: user.userId,
      role: user.role,
      email: user.email,
      tokenVersion: user.tokenVersion || 0,
      jti,
    });

    return { accessToken, refreshToken };
  }

  async issuePair(userId: string, ua?: string, ip?: string) {
    const user = await this.userRepo.findById(userId);
    if (!user) throw Unauthorized("Usuario no encontrado");
    return this.generateTokens(user, ua, ip);
  }

  async rotateRefresh(oldToken: string, ua?: string, ip?: string) {
    let payload;
    try {
      payload = verifyRefreshToken(oldToken);
      if (!payload) throw new Error();
      if (!payload.jti) throw new Error();
    } catch {
      throw Unauthorized("Refresh token inválido");
    }

    const rt = await this.refreshTokenRepo.findById(payload.jti);
    if (!rt) throw Unauthorized("Refresh token no registrado");
    if (rt.revokedAt) throw Unauthorized("Refresh token revocado");
    if (rt.expiresAt <= new Date())
      throw Unauthorized("Refresh token expirado");

    await this.refreshTokenRepo.update(payload.jti, { revokedAt: new Date() });

    const user = await this.userRepo.findById(rt.userId);
    if (!user) throw Unauthorized("Usuario no encontrado");

    return this.generateTokens(user, ua, ip);
  }

  async revoke(jti: string) {
    await this.refreshTokenRepo.updateMany(
      { jti, revokedAt: null },
      { revokedAt: new Date() }
    );
  }
  async revokeAllForUser(userId: string) {
    await this.userRepo.update(userId, { tokenVersion: { increment: 1 } });
    await this.refreshTokenRepo.updateMany(
      { userId, revokedAt: null },
      { revokedAt: new Date() }
    );
  }
}

// TokenService debe ser resuelto por el contenedor DI
// No exportar instancia singleton
