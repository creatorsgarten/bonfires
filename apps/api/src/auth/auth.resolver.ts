import { UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'

import { AuthService } from './auth.service'
import { LocalAuthGuard } from './local.auth.guard'

import { User } from '../models'

import { UserService } from '../user/user.service'
import { CurrentUser } from './user.decorator'

@Resolver()
export class AuthResolver {
  constructor(
    readonly authService: AuthService,
    readonly userService: UserService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => User)
  async loginWithEmail(
    @Args('email') email: string,
    @Args('password') password: string,
    @CurrentUser() user: User
  ) {
    return user
  }
}
