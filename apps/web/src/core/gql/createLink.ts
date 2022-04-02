import { HttpLink } from '@apollo/client'

import { withWebsocketLink } from './websocketLink'

import { environment } from '../../envs/env'

const { gqlEndpoint } = environment

export function createLink() {
  // Standard HTTP link for queries/mutations.
  const httpLink = new HttpLink({ uri: gqlEndpoint })

  // Node environment does not support HttpLink.
  if (typeof window === 'undefined') return httpLink

  // Setup WebSocket link for subscriptions.
  return withWebsocketLink(httpLink)
}
