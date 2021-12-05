import { Module } from '@nestjs/common'

import { EventsService } from './events.service'
import { EventsResolver } from './events.resolver'

import { DataModule } from '../app/data.module'

import { DaysService } from '../days/days.service'
import { StaffsService } from '../staffs/staffs.service'
import { WorkspacesService } from '../workspaces/workspaces.service'

@Module({
  imports: [DataModule],
  providers: [
    EventsService,
    EventsResolver,
    WorkspacesService,
    StaffsService,
    DaysService,
  ],
})
export class EventsModule {}
