import { Logger } from '@nestjs/common'
import type { Context } from 'graphql-ws'
import type { User } from '@prisma/client'

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

export function createSubscriptionConfig(ctx: Options) {
  return {
    'graphql-ws': {
      path: '/api/graphql/ws',

      async onConnect(context: Context) {
        Logger.log('Client connected.', 'graphql-ws')

        const { connectionParams, extra } = wsContext(context)
      },
    },
  }
}
