import { UnauthorizedException } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { LoginResult } from './auth.model'
import { AuthService } from './auth.service'

import { Public } from './public.decorator'

@Resolver()
export class AuthResolver {
  constructor(readonly authService: AuthService) {}

  @Public()
  @Mutation(() => LoginResult)
  async loginWithEmail(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    const user = await this.authService.validate(email, password)
    if (!user) throw new UnauthorizedException()

    return this.authService.login(user)
  }
}
