import { Logger } from '@nestjs/common'
import type { Context } from 'graphql-ws'
import type { User } from '@prisma/client'

import type { SubscriptionConfig } from '@nestjs/graphql/dist/interfaces/gql-module-options.interface'

import { UserService } from '../user/user.service'

/** Subscription connection parameters. */
interface ConnectionParams {
  authorization: string
}

/** Connection context. */
interface ConnectionContext {
  user: User | null
}

/** GQL Context */
export interface GQLContext {
  extra: ConnectionContext
  connection: ConnectionContext
}

const wsContext = (context: Context) =>
  context as unknown as {
    connectionParams: ConnectionParams
    extra: ConnectionContext
  }

interface Options {
  userService: UserService
}

export function createSubscriptionConfig(ctx: Options): SubscriptionConfig {
  return {
    'subscriptions-transport-ws': {
      path: '/api/graphql',

      async onConnect(params: ConnectionParams): Promise<ConnectionContext> {
        Logger.log('Client connected.', 'subscriptions-ws')
        const user = await ctx.userService.findById(1)

        return { user }
      },
    },

    'graphql-ws': {
      path: '/api/graphql/ws',

      async onConnect(context: Context) {
        Logger.log('Client connected.', 'graphql-ws')

        const { connectionParams, extra } = wsContext(context)
        const user = await ctx.userService.findById(1)

        extra.user = user
      },
    },
  }
}
