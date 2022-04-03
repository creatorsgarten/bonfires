import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import { DataModule } from '../core/data.module'

import { UserModule } from '../user/user.module'
import { DaysModule } from '../days/days.module'
import { DutyModule } from '../duties/duties.module'
import { EventsModule } from '../events/events.module'
import { StaffsModule } from '../staffs/staffs.module'
import { AgendaModule } from '../agenda/agenda.module'
import { WorkspacesModule } from '../workspaces/workspaces.module'

import { GraphQLConfigService } from '../graphql/graphql.service'

@Module({
  imports: [
    UserModule,
    EventsModule,
    DaysModule,
    DutyModule,
    AgendaModule,
    StaffsModule,
    WorkspacesModule,

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [DataModule, UserModule],
      driver: ApolloDriver,
      useClass: GraphQLConfigService,
    }),
  ],
})
export class AppModule {}
