import { Module } from '@nestjs/common'

import { EventsService } from './events.service'

import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [],
  providers: [PrismaService, EventsService],
})
export class EventsModule {}
