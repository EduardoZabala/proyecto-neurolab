//inject repositories
import { container } from 'tsyringe'
import { AuthService } from '../services/auth/authService'
import { UserRepository } from '../repositories/userRepository'
import {TokenService} from "../services/auth/tokenService"
import { RefreshTokenRepository } from '../repositories/refreshTokenRepository'
import { UserService } from '../services/users/userService'
// import { EmailService } from '../services/mail/emailService'
import { VerificationService } from '../services/mail/verificationService'
import { EmailVerificationTokenRepository } from '../repositories/emailVerificationTokenRepository'
import { EmailVerificationService } from '../services/mail/emailVerificationService'
//register dependencies - service
container.register("TokenService",{useClass: TokenService})
container.register("AuthService", { useClass: AuthService })
container.register("UserRepo", { useClass: UserRepository })
container.register("UserService",{useClass: UserService})
container.register("VerificationService",{useClass: VerificationService})
container.register("EmailVerificationService",{useClass: EmailVerificationService})
// container.register("EmailService",EmailService)
//register dependencies - repository
container.register("RefreshTokenRepo", { useClass: RefreshTokenRepository })
container.register("EmailVerificationTokenRepo", { useClass: EmailVerificationTokenRepository })

export default container
