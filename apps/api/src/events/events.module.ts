import { Module } from '@nestjs/common'

import { EventsService } from './events.service'
import { EventsResolver } from './events.resolver'

import { PrismaService } from '../prisma/prisma.service'
import { WorkspacesService } from '../workspaces/workspaces.service'

@Module({
  controllers: [],
  providers: [PrismaService, EventsService, EventsResolver, WorkspacesService],
})
export class EventsModule {}
