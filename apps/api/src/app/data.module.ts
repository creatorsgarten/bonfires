import { Module } from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { PubSubService } from '../pubsub/pubsub.service'

@Module({
  providers: [PrismaService, PubSubService],
  exports: [PrismaService, PubSubService],
})
export class DataModule {}
