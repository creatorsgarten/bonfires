import { Module } from '@nestjs/common'

import { WorkspacesService } from './workspaces.service'
import { WorkspacesResolver } from './workspaces.resolver'

import { DataModule } from '../app/data.module'

import { UserService } from '../user/user.service'
import { EventsService } from '../events/events.service'

@Module({
  imports: [DataModule],

  providers: [
    UserService,
    EventsService,
    WorkspacesService,
    WorkspacesResolver,
  ],
})
export class WorkspacesModule {}
