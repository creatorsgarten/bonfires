import { GraphQLModule } from '@nestjs/graphql'

import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'

import { LiveDirective } from './live.directive'
import { createSubscriptionConfig, GQLContext } from './subscriptions.config'

export const GraphQLAppModule = GraphQLModule.forRoot({
  debug: true,
  path: '/graphql',
  playground: false,
  autoSchemaFile: true,
  useGlobalPrefix: true,

  schemaDirectives: {
    live: LiveDirective,
  },

  typeDefs: `directive @live on FIELD_DEFINITION`,

  plugins: [
    ApolloServerPluginLandingPageLocalDefault(),
    ApolloServerPluginInlineTrace(),
  ],

  subscriptions: createSubscriptionConfig(),
  context: ({ connection, extra }: GQLContext) => {},
})
