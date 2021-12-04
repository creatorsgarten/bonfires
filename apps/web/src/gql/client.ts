import { ApolloClient, InMemoryCache } from '@apollo/client'

export function createApolloClient() {
  return new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
  })
}
