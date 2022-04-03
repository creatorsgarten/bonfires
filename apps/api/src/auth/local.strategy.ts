import { Strategy, IStrategyOptions } from 'passport-local'

import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { AuthService } from './auth.service'

const options: IStrategyOptions = {
  usernameField: 'email',
}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(options)
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validate(email, password)
    if (!user) throw new UnauthorizedException()

    return user
  }
}
