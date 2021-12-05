import { io } from 'socket.io-client'
import { HttpLink } from '@apollo/client'

import { withWebsocketLink } from './websocketLink'
import { withLiveQueryLink } from './liveQueryLink'

import { environment } from '../../envs/env'

const { gqlEndpoint, liveEndpoint } = environment

export function createLink() {
  // Standard HTTP link for queries/mutations.
  const httpLink = new HttpLink({
    uri: gqlEndpoint,
  })

  // Node environment does not support HttpLink.
  if (!process.browser) return httpLink

  // Setup WebSocket link for subscriptions.
  const wsLink = withWebsocketLink(httpLink)

  // Socket.io client - used for live queries.
  const socket = io(liveEndpoint)

  // Setup live queries.
  return withLiveQueryLink(socket, wsLink)
}
