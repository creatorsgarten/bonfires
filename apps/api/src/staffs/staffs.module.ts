import { Module } from '@nestjs/common'

import { StaffsService } from './staffs.service'

import { DataModule } from '../app/data.module'

@Module({
  imports: [DataModule],
  providers: [StaffsService],
})
export class StaffsModule {}
