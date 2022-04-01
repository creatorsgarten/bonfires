import { join } from 'path'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { Injectable } from '@nestjs/common'

import { GqlOptionsFactory } from '@nestjs/graphql'

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
      typeDefs: `directive @live on QUERY`,

      plugins: [
        ApolloServerPluginLandingPageLocalDefault(),
        ApolloServerPluginInlineTrace(),
      ],

      subscriptions,

      // persistedQueries: { cache },
      // context: (context: GQLContext) => {},
    }
  }
}
