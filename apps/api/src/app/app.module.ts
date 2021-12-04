import { Module } from '@nestjs/common'

import { UserModule } from '../user/user.module'
import { DaysModule } from '../days/days.module'
import { EventsModule } from '../events/events.module'
import { StaffsModule } from '../staffs/staffs.module'
import { GraphQLAppModule } from '../graphql/graphql.module'
import { WorkspacesModule } from '../workspaces/workspaces.module'

import { PrismaService } from '../prisma/prisma.service'

@Module({
  imports: [
    UserModule,
    WorkspacesModule,
    EventsModule,
    DaysModule,
    StaffsModule,
    GraphQLAppModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
