import { Module } from '@nestjs/common'

import { StaffsService } from './staffs.service'

import { DataModule } from '../core/data.module'

@Module({
  imports: [DataModule],
  providers: [StaffsService],
  exports: [StaffsService],
})
export class StaffsModule {}
