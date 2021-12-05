import { forwardRef, Module } from '@nestjs/common'

import { WorkspacesService } from './workspaces.service'
import { WorkspacesResolver } from './workspaces.resolver'

import { DataModule } from '../core/data.module'
import { UserModule } from '../user/user.module'
import { EventsModule } from '../events/events.module'

@Module({
  imports: [DataModule, EventsModule, forwardRef(() => UserModule)],
  providers: [WorkspacesService, WorkspacesResolver],
  exports: [WorkspacesService],
})
export class WorkspacesModule {}
