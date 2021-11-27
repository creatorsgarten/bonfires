import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { UserModule } from '../user/user.module'

@Module({
  imports: [UserModule],
  providers: [PrismaService],
})
export class AppModule {}
