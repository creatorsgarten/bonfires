import { Module } from '@nestjs/common'

import { WorkspacesService } from './workspaces.service'
import { WorkspacesResolver } from './workspaces.resolver'

import { PrismaService } from '../prisma/prisma.service'
import { EventsService } from '../events/events.service'

@Module({
  providers: [
    PrismaService,
    EventsService,
    WorkspacesService,
    WorkspacesResolver,
  ],
})
export class WorkspacesModule {}
