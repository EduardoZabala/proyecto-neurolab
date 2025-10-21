export interface ITokenCacheRepo {

    setAccessToken(userId: string, token: string, expiresIn: number): Promise<void>;
  getAccessToken(userId: string): Promise<string | null>;
  deleteAccessToken(userId: string): Promise<void>;
  
  setRefreshToken(userId: string, token: string, expiresIn: number): Promise<void>;
  getRefreshToken(userId: string): Promise<string | null>;
  deleteRefreshToken(userId: string): Promise<void>;
  
  setVerificationToken(email: string, token: string, expiresIn: number): Promise<void>;
  getVerificationToken(email: string): Promise<string | null>;
  deleteVerificationToken(email: string): Promise<void>;
  
  clearUserTokens(userId: string): Promise<void>;
}