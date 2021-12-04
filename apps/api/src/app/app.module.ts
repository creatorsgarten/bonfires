import { Module } from '@nestjs/common'

import { UserModule } from '../user/user.module'
import { PrismaService } from '../prisma/prisma.service'
import { GraphQLAppModule } from '../graphql/graphql.module'
import { WorkspacesModule } from '../workspaces/workspaces.module'

@Module({
  imports: [GraphQLAppModule, UserModule, WorkspacesModule],
  providers: [PrismaService],
})
export class AppModule {}
