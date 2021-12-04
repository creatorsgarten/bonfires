import { Module } from '@nestjs/common'

import { UserModule } from '../user/user.module'
import { EventsModule } from '../events/events.module'
import { GraphQLAppModule } from '../graphql/graphql.module'
import { WorkspacesModule } from '../workspaces/workspaces.module'

import { PrismaService } from '../prisma/prisma.service'

@Module({
  imports: [GraphQLAppModule, UserModule, WorkspacesModule, EventsModule],
  providers: [PrismaService],
})
export class AppModule {}
