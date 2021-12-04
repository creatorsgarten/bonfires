import { Module } from '@nestjs/common'

import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { UserController } from './user.controller'

import { PrismaService } from '../prisma/prisma.service'
import { WorkspacesService } from '../workspaces/workspaces.service'

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, UserResolver, WorkspacesService],
})
export class UserModule {}
