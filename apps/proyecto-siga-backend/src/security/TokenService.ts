import prisma from '@packages/libs/prisma'
import { add } from 'date-fns'
import { v4 as uuid } from 'uuid'
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt'
import { Unauthorized } from '../utils/httpError'


const parseTTL = (s?: string) => {
  const fallback = { days: 30 }
  if (!s) return fallback
  const m = /^(\d+)([smhd])$/.exec(s)
  if (!m) return fallback
  const n = Math.max(Number(m[1]), 1) 
  switch (m[2]) {
    case 's': return { seconds: n }
    case 'm': return { minutes: n }
    case 'h': return { hours: n }
    default:  return { days: n }
  }
}

export class TokenService {
  private async generateTokens(user: { userId: string; role: string; email: string; tokenVersion: number }, ua?: string, ip?: string) {
    const jti = uuid()
    const refreshTtl = parseTTL(process.env.REFRESH_TOKEN_TTL)
    const expiresAt = add(new Date(), refreshTtl)

    await prisma.refreshToken.create({
      data: { jti, userId: user.userId, expiresAt, userAgent: ua, ip }
    })

    const accessToken = signAccessToken({
      sub: user.userId, role: user.role, email: user.email, tver: user.tokenVersion
    })
    const refreshToken = signRefreshToken({
      sub: user.userId, role: user.role, email: user.email, tver: user.tokenVersion, jti
    })

    return { accessToken, refreshToken }
  }

  async issuePair(userId: string, ua?: string, ip?: string) {
    const user = await prisma.user.findUnique({ where: { userId: userId } })
    if (!user) throw Unauthorized('Usuario no encontrado')
    return this.generateTokens(user, ua, ip)
  }

  async rotateRefresh(oldToken: string, ua?: string, ip?: string) {
    let payload
    try {
      payload = verifyRefreshToken(oldToken)
      if (!payload) throw new Error("Token no válido")
      if (!payload.jti) throw new Error("Token no válido")
    } catch {
      throw Unauthorized('Refresh token inválido')
    }

    const rt = await prisma.refreshToken.findUnique({ where: { jti: payload.jti } })
    if (!rt) throw Unauthorized('Refresh token no registrado')
    if (rt.revokedAt) throw Unauthorized('Refresh token revocado')
    if (rt.expiresAt <= new Date()) throw Unauthorized('Refresh token expirado')

    await prisma.refreshToken.update({
      where: { jti: payload.jti },
      data: { revokedAt: new Date() }
    })

    const user = await prisma.user.findUnique({ where: { userId: rt.userId } })
    if (!user) throw Unauthorized('Usuario no encontrado')

    return this.generateTokens(user, ua, ip)
  }

  async revoke(jti: string) {
    await prisma.refreshToken.updateMany({
      where: { jti, revokedAt: null },
      data: { revokedAt: new Date() }
    })
  }
  async revokeAllForUser(userId: string) {
    await prisma.user.update({
      where: { userId: userId },
      data: { tokenVersion: { increment: 1 } }
    })
    await prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() }
    })
  }
}

export const tokenService = new TokenService()
