import { Module } from '@nestjs/common'

import { UserModule } from '../user/user.module'
import { PrismaService } from '../prisma/prisma.service'
import { GraphQLAppModule } from '../graphql/graphql.module'

@Module({
  imports: [UserModule, GraphQLAppModule],
  providers: [PrismaService],
})
export class AppModule {}
