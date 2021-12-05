import { ApolloLink, Operation, split } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

import { environment } from '../../envs/env'

const { wsEndpoint } = environment

export function isWebsocketOperation(op: Operation) {
  const n = getMainDefinition(op.query)

  return n.kind === 'OperationDefinition' && n.operation === 'subscription'
}

export function withWebsocketLink(defaultLink: ApolloLink) {
  const wsLink = new WebSocketLink({
    uri: wsEndpoint,

    options: {
      reconnect: true,
      connectionParams: {
        authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    },
  })

  return split(isWebsocketOperation, wsLink, defaultLink)
}
