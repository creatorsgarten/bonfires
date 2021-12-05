import { Module } from '@nestjs/common'

import { DaysService } from './days.service'

import { DataModule } from '../core/data.module'

@Module({
  imports: [DataModule],
  providers: [DaysService],
  exports: [DaysService],
})
export class DaysModule {}
