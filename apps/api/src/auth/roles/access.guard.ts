import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common'

import { AppAbility } from './ability.types'
import { PolicyHandler } from './guard.types'

import { CHECK_ACCESS_KEY } from './access.decorator'
import { getSystemUserAbility } from './system.ability'

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const accessChecks =
      this.reflector.get<PolicyHandler[]>(
        CHECK_ACCESS_KEY,
        context.getHandler()
      ) ?? []

    // Do not check if guards are not present.
    if (accessChecks.length === 0) return true

    const ctx = GqlExecutionContext.create(context)

    const { user } = ctx.getContext().req
    if (!user) throw new UnauthorizedException('missing user')

    const ability = getSystemUserAbility(user)

    return accessChecks.every((handler) => this.handle(handler, ability))
  }

  private handle(handler: PolicyHandler, ability: AppAbility) {
    if (typeof handler === 'function') return handler(ability)

    return handler.handle(ability)
  }
}
