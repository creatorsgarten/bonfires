import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { jwtModuleOptions } from './auth.config'

import { JwtStrategy } from './jwt/jwt.strategy'
import { AccessGuard } from './roles/access.guard'
import { JwtAuthGuard } from './jwt/jwt.auth.guard'

import { UserModule } from '../user/user.module'

@Module({
  imports: [PassportModule, UserModule, JwtModule.register(jwtModuleOptions)],

  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: AccessGuard },
  ],
})
export class AuthModule {}
