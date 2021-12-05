import * as Redis from 'ioredis'

export const redisClient = new Redis({ connectionName: 'redis' })
