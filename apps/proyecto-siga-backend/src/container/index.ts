//inject repositories
import { container } from 'tsyringe'
import { AuthService } from '../services/auth/authService'
import { UserRepository } from '../repositories/userRepository'
import {TokenService} from "../services/auth/tokenService"
import { UserService } from '../services/users/userService'
import { EmailVerificationService } from '../services/mail/emailVerificationService'
import { TokenCacheService } from '../services/token/tokenCacheService'
import { TokenCacheRepository } from '../repositories/tokenCacheRepository'
import { VerificationService } from '../services/verification/verificationService'
import { TestRepository } from '../repositories/testRepository'
import { TestService } from '../services/test/testService'
//register dependencies - service
container.register("TokenCacheService", { useClass: TokenCacheService })
container.register("TokenService",{useClass: TokenService})
container.register("AuthService", { useClass: AuthService })
container.register("UserService",{useClass: UserService})
container.register("VerificationService",{useClass: VerificationService})
container.register("EmailVerificationService",{useClass: EmailVerificationService})
container.register("TestService",TestService)
//register dependencies - repository
container.register("TokenCacheRepo",{useClass:TokenCacheRepository})
container.register("TestRepo", { useClass: TestRepository })
container.register("UserRepo", { useClass: UserRepository })


export default container
