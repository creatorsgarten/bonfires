import type { Context } from 'graphql-ws'
import type { User } from '@prisma/client'
import type { SubscriptionConfig } from '@nestjs/graphql/dist/interfaces/gql-module-options.interface'

/** Subscription connection parameters. */
interface ConnectionParams {
  authorization: string
}

/** Connection context. */
interface ConnectionContext {
  user: User
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

const mockUser = (): User => ({
  id: 1,
  username: 'mockuser',
  email: 'user@example.com',
  displayName: 'Mock User',
  photo: '',
  profileId: 1,
})

export function createSubscriptionConfig(): SubscriptionConfig {
  const user = mockUser()

  return {
    'subscriptions-transport-ws': {
      path: '/api/graphql',

      onConnect(params: ConnectionParams): ConnectionContext {
        return { user }
      },
    },

    'graphql-ws': {
      path: '/api/graphql/ws',

      onConnect(context: Context) {
        const { connectionParams, extra } = wsContext(context)

        extra.user = user
      },
    },
  }
}
