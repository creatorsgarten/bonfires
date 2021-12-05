import { Injectable } from '@nestjs/common'
import { RedisPubSub } from 'graphql-redis-subscriptions'

import { Topics } from '../@types/topics'

@Injectable()
export class PubSubService {
  pubsub = new RedisPubSub()

  publish<T extends keyof Topics>(topic: T, payload: Topics[T]) {
    return this.pubsub.publish(topic, { [topic]: payload })
  }

  asyncIterator<T extends keyof Topics>(topic: T) {
    return this.pubsub.asyncIterator(topic)
  }
}
