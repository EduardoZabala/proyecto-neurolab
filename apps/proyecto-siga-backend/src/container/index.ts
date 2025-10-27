//inject repositories
import { container } from 'tsyringe'
import { AuthService } from '../services/auth/authService'
import { UserRepository } from '../repositories/userRepository'
import {TokenService} from "../services/auth/tokenService"
import { RefreshTokenRepository } from '../repositories/refreshTokenRepository'
import { UserService } from '../services/users/userService'
import { EmailService } from '../services/mail/emailService'
import { VerificationService } from '../services/mail/verificationService'
import { EmailVerificationTokenRepository } from '../repositories/emailVerificationTokenRepository'
import { TestRepository } from '../repositories/testRepository'
import { TestService } from '../services/test/testService'
//register dependencies - service
container.register("TokenService",TokenService)
container.register("AuthService", { useClass: AuthService })
container.register("UserRepo", { useClass: UserRepository })
container.register("UserService",UserService)
container.register("EmailService",EmailService)
container.register("VerificationService",VerificationService)
container.register("TestService",TestService)
//register dependencies - repository
container.register("RefreshTokenRepo", RefreshTokenRepository)
container.register("EmailVerificationTokenRepo", EmailVerificationTokenRepository)
container.register("TestRepo", { useClass: TestRepository })

export default container
