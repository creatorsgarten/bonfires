import { compare } from 'bcrypt'

import { User } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validate(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email)
    if (!user) return null

    const isValid = await compare(password, user.password)
    if (!isValid) return null

    return user
  }

  async login(user: User) {
    if (!user.id || !user.email) throw new UnauthorizedException()

    return {
      token: this.jwtService.sign({ sub: user.id, email: user.email }),
    }
  }
}
