import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { LoginResult } from './auth.model'
import { AuthService } from './auth.service'
import { CurrentUser } from './user.decorator'
import { LocalAuthGuard } from './local.auth.guard'

import { User } from '../models'

import { UserService } from '../user/user.service'

@Resolver()
export class AuthResolver {
  constructor(
    readonly authService: AuthService,
    readonly userService: UserService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => LoginResult)
  async loginWithEmail(
    @Args('email') email: string,
    @Args('password') password: string,
    @CurrentUser() user: User
  ) {
    return this.authService.login(user)
  }
}
