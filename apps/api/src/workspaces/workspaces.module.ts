import { Module } from '@nestjs/common'

import { WorkspacesService } from './workspaces.service'
import { WorkspacesResolver } from './workspaces.resolver'

import { UserService } from '../user/user.service'
import { EventsService } from '../events/events.service'

import { PrismaService } from '../prisma/prisma.service'
import { PubSubService } from '../pubsub/pubsub.service'

@Module({
  providers: [
    UserService,
    PrismaService,
    PubSubService,
    EventsService,
    WorkspacesService,
    WorkspacesResolver,
  ],
})
export class WorkspacesModule {}
