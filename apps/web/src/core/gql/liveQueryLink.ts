import { print } from 'graphql'
import type { Socket } from 'socket.io-client'
import { getMainDefinition } from '@apollo/client/utilities'

import {
  ApolloLink,
  FetchResult,
  Observable,
  Operation,
  split,
} from '@apollo/client'

import {
  SocketIOGraphQLClient,
  createSocketIOGraphQLClient,
} from '@n1ru4l/socket-io-graphql-client'

import { isLiveQueryOperationDefinitionNode } from '@n1ru4l/graphql-live-query'
import { applyAsyncIterableIteratorToSink } from '@n1ru4l/push-pull-async-iterable-iterator'
import { applyLiveQueryJSONPatch } from '@n1ru4l/graphql-live-query-patch-json-patch'

type Client = SocketIOGraphQLClient<FetchResult>

export function isLiveQueryOperation(op: Operation) {
  const n = getMainDefinition(op.query)

  return isLiveQueryOperationDefinitionNode(n, op.variables)
}

export const withLiveQueryLink = (socket: Socket, link: ApolloLink) => {
  const client = createSocketIOGraphQLClient<FetchResult>(socket)
  const liveLink = new LiveQueryLink(client)

  return split(isLiveQueryOperation, liveLink, link)
}

export class LiveQueryLink extends ApolloLink {
  private client: Client

  constructor(client: Client) {
    super()
    this.client = client
  }

  request(op: Operation): Observable<FetchResult> | null {
    return new Observable((observer) => {
      const producer = this.client.execute({
        operationName: op.operationName,
        operation: print(op.query),
        variables: op.variables,
      })

      const patcher = applyLiveQueryJSONPatch(producer)

      return applyAsyncIterableIteratorToSink(patcher, observer)
    })
  }
}
