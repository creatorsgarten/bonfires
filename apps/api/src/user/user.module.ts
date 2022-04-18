import { Module } from '@nestjs/common'

import { UserService } from './user.service'
import { UserResolver } from './user.resolver'

import { DataModule } from '../core/data.module'
import { WorkspacesModule } from '../workspaces/workspaces.module'

@Module({
  imports: [DataModule, WorkspacesModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
