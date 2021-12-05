import { Module } from '@nestjs/common'

import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { UserController } from './user.controller'

import { DataModule } from '../app/data.module'
import { WorkspacesService } from '../workspaces/workspaces.service'

@Module({
  imports: [DataModule],
  controllers: [UserController],
  providers: [UserService, UserResolver, WorkspacesService],
  exports: [UserService],
})
export class UserModule {}
