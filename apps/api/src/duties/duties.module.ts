import { Module } from '@nestjs/common'

import { DutyService } from './duties.service'
import { DutyResolver } from './duties.resolver'

import { DataModule } from '../core/data.module'

@Module({
  imports: [DataModule],
  providers: [DutyService, DutyResolver],
  exports: [DutyService],
})
export class DutyModule {}
