import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { LocalStrategy } from './local.strategy'

import { UserModule } from '../user/user.module'
import { environment } from '../environments/environment'

const secret = process.env.JWT_SECRET ?? environment.jwtSecret

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({ secret, signOptions: { expiresIn: '60s' } }),
  ],
  providers: [AuthService, LocalStrategy, AuthResolver],
})
export class AuthModule {}
