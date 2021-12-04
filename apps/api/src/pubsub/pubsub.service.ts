import { Injectable } from '@nestjs/common'
import { RedisPubSub } from 'graphql-redis-subscriptions'

@Injectable()
export class PubSubService {
  pubsub = new RedisPubSub()

  publish<T>(topic: string, payload: T) {
    return this.pubsub.publish(topic, { [topic]: payload })
  }

  asyncIterator(topic: string) {
    return this.pubsub.asyncIterator(topic)
  }
}
