import { Module } from '@nestjs/common'

import { DaysService } from './days.service'

import { DataModule } from '../app/data.module'

@Module({
  imports: [DataModule],
  providers: [DaysService],
})
export class DaysModule {}
