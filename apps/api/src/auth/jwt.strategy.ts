import { Strategy } from 'passport-jwt'

import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { jwtStrategyOptions } from './auth.config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super(jwtStrategyOptions)
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username }
  }
}
