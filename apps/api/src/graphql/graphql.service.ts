import { join } from 'path'
import { GraphQLSchema } from 'graphql'
import { Injectable } from '@nestjs/common'
import { GqlOptionsFactory } from '@nestjs/graphql'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLLiveDirective } from '@n1ru4l/graphql-live-query'

import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginInlineTrace,
} from 'apollo-server-core'

import { createSubscriptionConfig } from './subscriptions.config'

import { UserService } from '../user/user.service'
import { PubSubService } from '../core/pubsub.service'

@Injectable()
export class GraphQLConfigService implements GqlOptionsFactory {
  constructor(
    private pubsubService: PubSubService,
    private userService: UserService
  ) {}

  async createGqlOptions(): Promise<ApolloDriverConfig> {
    const { userService } = this

    const autoSchemaFile = join(process.cwd(), 'schema.gql')

    const subscriptions = createSubscriptionConfig({ userService })

    return {
      debug: true,
      path: '/graphql',
      playground: false,
      autoSchemaFile,
      useGlobalPrefix: true,

      plugins: [
        ApolloServerPluginLandingPageLocalDefault(),
        ApolloServerPluginInlineTrace(),
      ],

      subscriptions,

      transformSchema(schema) {
        const config = schema.toConfig()

        return new GraphQLSchema({
          ...config,
          directives: [...config.directives, GraphQLLiveDirective],
        })
      },

      // persistedQueries: { cache },
      // context: (context: GQLContext) => {},
    }
  }
}
