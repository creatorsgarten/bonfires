import { GraphQLModule } from '@nestjs/graphql'

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

export const GraphQLAppModule = GraphQLModule.forRoot({
  debug: true,
  playground: false,
  autoSchemaFile: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
})
