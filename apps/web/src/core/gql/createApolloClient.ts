import { ApolloClient, InMemoryCache } from '@apollo/client'

import { typePolicies } from './policies'
import { createLink } from './createLink'

export function createApolloClient() {
  const cache = new InMemoryCache({ typePolicies })
  const link = createLink()

  return new ApolloClient({ cache, link })
}
