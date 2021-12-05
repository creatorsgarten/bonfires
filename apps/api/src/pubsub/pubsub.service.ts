import * as Redis from 'ioredis'
import { Injectable } from '@nestjs/common'
import { RedisPubSub } from 'graphql-redis-subscriptions'

import { InMemoryLiveQueryStore } from '@n1ru4l/in-memory-live-query-store'

import { Topics } from '../@types/topics'

@Injectable()
export class PubSubService {
  redisClient = new Redis()
  pubsub = new RedisPubSub()
  store = new InMemoryLiveQueryStore()

  publish<T extends keyof Topics>(topic: T, payload: Topics[T]) {
    return this.pubsub.publish(topic, { [topic]: payload })
  }

  asyncIterator<T extends keyof Topics>(topic: T) {
    return this.pubsub.asyncIterator(topic)
  }
}
