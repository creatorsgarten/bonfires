import { Module } from '@nestjs/common'

import { StaffsService } from './staffs.service'

import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [PrismaService, StaffsService],
})
export class StaffsModule {}
