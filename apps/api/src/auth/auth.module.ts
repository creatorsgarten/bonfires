import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'

import { UserModule } from '../user/user.module'
import { AuthResolver } from './auth.resolver'

@Module({
  imports: [PassportModule, UserModule],
  providers: [AuthService, LocalStrategy, AuthResolver],
})
export class AuthModule {}
