import { ApolloClient, InMemoryCache } from '@apollo/client'

import type { TypedTypePolicies } from '@gql'

const typePolicies: TypedTypePolicies = {
  Query: {
    fields: {
      event: {
        read: (_, { args, toReference }) =>
          toReference({ __typename: 'Event', id: args?.id }),
      },
    },
  },
}

export function createApolloClient() {
  const cache = new InMemoryCache({
    typePolicies,
  })

  return new ApolloClient({
    uri: '/api/graphql',
    cache,
  })
}
