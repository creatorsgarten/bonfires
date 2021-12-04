import { Module } from '@nestjs/common'

import { DaysService } from './days.service'

import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [PrismaService, DaysService],
})
export class DaysModule {}
