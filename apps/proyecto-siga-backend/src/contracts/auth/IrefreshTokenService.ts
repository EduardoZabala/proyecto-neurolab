export interface IRefreshTokenService {
  issuePair(userId: string, ua?: string, ip?: string): Promise<{ accessToken: string; refreshToken: string }>;
  rotateRefresh(oldToken: string, ua?: string, ip?: string): Promise<{ accessToken: string; refreshToken: string }>;
  revoke(jti: string): Promise<void>;
  revokeAllForUser(userId: string): Promise<void>;
}
