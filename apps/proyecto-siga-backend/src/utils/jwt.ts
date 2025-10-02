import jwt from 'jsonwebtoken'

export type JwtPayloadBase = {
  sub: string
  role: string
  email: string
  tver: number  
  jti?: string  
}

const signToken = (
  payload: JwtPayloadBase,
  secret: string,
  ttl: string | number
): string => {
  try {
    return jwt.sign(payload, secret, { expiresIn: ttl } as jwt.SignOptions)
  } catch (error) {
    throw new Error('Error al firmar el token')
  }
}


const verifyToken = (token: string, secret: string): JwtPayloadBase | null => {
  try {
    return jwt.verify(token, secret) as JwtPayloadBase
  } catch (error) {
    return null
  }
}


export function signAccessToken(payload: Omit<JwtPayloadBase, 'jti'>) {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET no está configurado')
  const ttl = process.env.ACCESS_TOKEN_TTL || '15m'
  return signToken(payload, secret, ttl)
}


export function verifyAccessToken(token: string): JwtPayloadBase | null {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET no está configurado')
  return verifyToken(token, secret)
}


export function signRefreshToken(payload: JwtPayloadBase) {
  const secret = process.env.JWT_REFRESH_SECRET
  if (!secret) throw new Error('JWT_REFRESH_SECRET no está configurado')
  const ttl = process.env.REFRESH_TOKEN_TTL || '30d'
  return signToken(payload, secret, ttl)
}


export function verifyRefreshToken(token: string): JwtPayloadBase | null {
  const secret = process.env.JWT_REFRESH_SECRET
  if (!secret) throw new Error('JWT_REFRESH_SECRET no está configurado')
  return verifyToken(token, secret)
}
