import { Module } from '@nestjs/common'

import { WorkspacesService } from './workspaces.service'
import { WorkspacesResolver } from './workspaces.resolver'

import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [],
  providers: [PrismaService, WorkspacesService, WorkspacesResolver],
})
export class WorkspacesModule {}
