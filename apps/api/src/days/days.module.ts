import { Module } from '@nestjs/common'

import { DaysService } from './days.service'

import { DataModule } from '../core/data.module'
import { StaffsModule } from '../staffs/staffs.module'

@Module({
  imports: [DataModule, StaffsModule],
  providers: [DaysService],
  exports: [DaysService],
})
export class DaysModule {}
