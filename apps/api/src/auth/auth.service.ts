import { omit } from 'lodash'
import { compare } from 'bcrypt'
import { User } from '@prisma/client'
import { Injectable } from '@nestjs/common'

import { UserService } from '../user/user.service'

type U = Omit<User, 'password'>

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validate(email: string, password: string): Promise<U | null> {
    const user = await this.userService.findByEmail(email)
    if (!user) return null

    const isValid = await compare(password, user.password)
    if (!isValid) return null

    return omit(user, ['password'])
  }
}
