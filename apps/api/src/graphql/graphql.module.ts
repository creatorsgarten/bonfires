import { GraphQLModule } from '@nestjs/graphql'

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

export const GraphQLAppModule = GraphQLModule.forRoot({
  debug: true,
  playground: false,
  autoSchemaFile: true,
  path: '/graphql',
  plugins: [ApolloServerPluginLandingPageLocalDefault()],

  useGlobalPrefix: true,

  subscriptions: {
    'graphql-ws': {
      path: '/api/graphql/ws',
    },
    'subscriptions-transport-ws': {
      path: '/api/graphql/ws2',
    },
  },
})
