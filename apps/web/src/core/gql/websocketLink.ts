import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { ApolloLink, Operation, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'

import { environment } from '../../envs/env'

const { wsEndpoint } = environment

export function isWebsocketOperation(op: Operation) {
  const n = getMainDefinition(op.query)

  return n.kind === 'OperationDefinition' && n.operation === 'subscription'
}

export function withWebsocketLink(defaultLink: ApolloLink) {
  const client = createClient({
    url: wsEndpoint,

    on: {
      connected: () => console.log('[graphql-ws] connected'),
      error: () => console.log('[graphql-ws] error'),
    },

    connectionParams: {
      authorization: 'Bearer YOUR_TOKEN_HERE',
    },

    lazy: true,
  })

  const wsLink = new GraphQLWsLink(client)

  return split(isWebsocketOperation, wsLink, defaultLink)
}
