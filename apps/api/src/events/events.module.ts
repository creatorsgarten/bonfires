import { Module } from '@nestjs/common'

import { EventsService } from './events.service'
import { EventsResolver } from './events.resolver'

import { DaysService } from '../days/days.service'
import { PrismaService } from '../prisma/prisma.service'
import { StaffsService } from '../staffs/staffs.service'
import { WorkspacesService } from '../workspaces/workspaces.service'

@Module({
  controllers: [],
  providers: [
    PrismaService,
    EventsService,
    EventsResolver,
    WorkspacesService,
    StaffsService,
    DaysService,
  ],
})
export class EventsModule {}
