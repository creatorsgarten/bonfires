import { forwardRef, Module } from '@nestjs/common'

import { EventsService } from './events.service'
import { EventsResolver } from './events.resolver'

import { DataModule } from '../core/data.module'
import { DaysModule } from '../days/days.module'
import { StaffsModule } from '../staffs/staffs.module'
import { WorkspacesModule } from '../workspaces/workspaces.module'

@Module({
  imports: [
    DataModule,
    DaysModule,
    StaffsModule,
    forwardRef(() => WorkspacesModule),
  ],
  providers: [EventsService, EventsResolver],
  exports: [EventsService],
})
export class EventsModule {}
