import { GraphQLModule } from '@nestjs/graphql'

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

import { createSubscriptionConfig, GQLContext } from './subscriptions.config'

export const GraphQLAppModule = GraphQLModule.forRoot({
  debug: true,
  path: '/graphql',
  playground: false,
  autoSchemaFile: true,
  useGlobalPrefix: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],

  subscriptions: createSubscriptionConfig(),
  context: ({ connection, extra }: GQLContext) => {},
})
