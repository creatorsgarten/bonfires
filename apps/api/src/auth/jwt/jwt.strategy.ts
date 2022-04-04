import { Strategy } from 'passport-jwt'

import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { JwtToken } from './token.types'

import { AuthUser } from '../user.decorator'
import { jwtStrategyOptions } from '../auth.config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super(jwtStrategyOptions)
  }

  async validate(payload: JwtToken): Promise<AuthUser> {
    return { id: payload.sub, email: payload.email }
  }
}
