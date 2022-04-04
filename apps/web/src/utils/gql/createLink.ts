import { HttpLink } from '@apollo/client'

import { createAuthLink } from './authLink'
import { withWebsocketLink } from './websocketLink'

import { environment } from '../../envs/env'

const { gqlEndpoint } = environment

export function createLink() {
  // Standard HTTP link for queries/mutations.
  const httpLink = new HttpLink({ uri: gqlEndpoint })

  // Setup authentication.
  const authLink = createAuthLink()

  // Node environment does not support HttpLink.
  if (typeof window === 'undefined') return httpLink

  // Setup WebSocket link for subscriptions.
  return authLink.concat(withWebsocketLink(httpLink))
}
