import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Injectable, ExecutionContext } from '@nestjs/common'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ])

    if (isPublic) return true

    return super.canActivate(context)
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)

    return ctx.getContext().req
  }
}
