import { join } from 'path'
import { Module } from '@nestjs/common'
import { GraphQLModule as GQLModule } from '@nestjs/graphql'
import { BaseRedisCache } from 'apollo-server-cache-redis'

import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'

import { LiveDirective } from './live.directive'
import { createSubscriptionConfig, GQLContext } from './subscriptions.config'

import { redisClient } from '../pubsub/redis.service'

const autoSchemaFile = join(process.cwd(), 'schema.gql')

@Module({
  imports: [
    GQLModule.forRootAsync({
      imports: [],
      inject: [],

      useFactory() {
        return {
          debug: true,
          path: '/graphql',
          playground: false,
          autoSchemaFile,
          useGlobalPrefix: true,

          schemaDirectives: {
            live: LiveDirective,
          },

          typeDefs: `directive @live on QUERY`,

          plugins: [
            ApolloServerPluginLandingPageLocalDefault(),
            ApolloServerPluginInlineTrace(),
          ],

          subscriptions: createSubscriptionConfig(),
          context: ({ connection, extra }: GQLContext) => {},

          persistedQueries: {
            cache: new BaseRedisCache({ client: redisClient }),
          },
        }
      },
    }),
  ],
})
export class GraphQLModule {}
