import { GraphQLModule } from '@nestjs/graphql'

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

export const GraphQLAppModule = GraphQLModule.forRoot({
  debug: true,
  playground: false,
  autoSchemaFile: true,
  path: '/api/graphql',
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
})
