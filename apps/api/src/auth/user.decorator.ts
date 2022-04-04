import { GqlExecutionContext } from '@nestjs/graphql'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export interface AuthUser {
  id: number
  email: string
}

export const AuthUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context).getContext()

    return ctx.req.user as AuthUser
  }
)
