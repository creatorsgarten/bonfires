import { join } from 'path'
import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common'
import { BaseRedisCache } from 'apollo-server-cache-redis'

import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql'

import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginInlineTrace,
} from 'apollo-server-core'

import { LiveDirective } from './live.directive'
import { createSubscriptionConfig, GQLContext } from './subscriptions.config'

import { UserService } from '../user/user.service'
import { PubSubService } from '../pubsub/pubsub.service'

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
  constructor(
    private pubsubService: PubSubService,
    private userService: UserService
  ) {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    const { pubsubService, userService } = this

    Logger.log('Creating GraphQL options', 'GraphQLConfig')

    const autoSchemaFile = join(process.cwd(), 'schema.gql')

    const client = pubsubService.redisClient
    const cache = new BaseRedisCache({ client })

    const subscriptions = createSubscriptionConfig({ userService })

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

      subscriptions,
      persistedQueries: { cache },

      context: ({ connection, extra }: GQLContext) => {},
    }
  }
}
