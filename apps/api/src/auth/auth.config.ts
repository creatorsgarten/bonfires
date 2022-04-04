import { JwtModuleOptions } from '@nestjs/jwt'
import { ExtractJwt, StrategyOptions } from 'passport-jwt'

import { environment } from '../environments/environment'

export const secret = process.env.JWT_SECRET ?? environment.jwtSecret

export const jwtModuleOptions: JwtModuleOptions = {
  secret,
  signOptions: { expiresIn: '60s' },
}

export const jwtStrategyOptions: StrategyOptions = {
  secretOrKey: secret,
  ignoreExpiration: false,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}
