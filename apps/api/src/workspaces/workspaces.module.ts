import { Module } from '@nestjs/common'

import { WorkspacesService } from './workspaces.service'
import { WorkspacesResolver } from './workspaces.resolver'

import { UserService } from '../user/user.service'
import { PrismaService } from '../prisma/prisma.service'
import { EventsService } from '../events/events.service'

@Module({
  providers: [
    UserService,
    PrismaService,
    EventsService,
    WorkspacesService,
    WorkspacesResolver,
  ],
})
export class WorkspacesModule {}
