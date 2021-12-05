import {
  split,
  HttpLink,
  ApolloClient,
  InMemoryCache,
  Operation,
  FieldReadFunction,
  FieldPolicy,
} from '@apollo/client'

import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

import type { TypedTypePolicies } from '@gql'

import { environment } from '../../envs/env'

const { gqlEndpoint, wsEndpoint } = environment

const ref =
  (type: string): FieldReadFunction =>
  (_, { args, toReference }) =>
    toReference({ __typename: type, id: args?.id })

const read = (type: string): FieldPolicy => ({ read: ref(type) })

const typePolicies: TypedTypePolicies = {
  Query: {
    fields: {
      event: read('Event'),
      workspace: read('Workspace'),
    },
  },
}

function isWebsocketOperation(op: Operation) {
  const n = getMainDefinition(op.query)

  return n.kind === 'OperationDefinition' && n.operation === 'subscription'
}

function createLink() {
  const httpLink = new HttpLink({
    uri: gqlEndpoint,
  })

  // Node environment does not support HttpLink.
  if (!process.browser) return httpLink

  const wsLink = new WebSocketLink({
    uri: wsEndpoint,

    options: {
      reconnect: true,
      connectionParams: {
        authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    },
  })

  return split(isWebsocketOperation, wsLink, httpLink)
}

export function createApolloClient() {
  const cache = new InMemoryCache({ typePolicies })
  const link = createLink()

  return new ApolloClient({ cache, link })
}
