import {User} from '../user/IuserService'
export interface UserAuth extends User {
  password: string
  tokenVersion: number
}


export interface UserProfile {
  userId: string
  userNumber: string
  email: string
  name: string
  role: string
  gender?: string | ''
  createdAt: Date
}

export interface LoginResult {
  token: string
  user: User
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface ChangePasswordInput {
  userId: string
  currentPassword: string
  newPassword: string
}

export interface IAuthService {
  login(email: string, password: string): Promise<LoginResult>
  getUserProfile(userId: string): Promise<UserProfile>
  changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void>
  validateToken(userId: string, tokenVersion: number): Promise<boolean>
}