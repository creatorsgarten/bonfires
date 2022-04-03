import { Module } from '@nestjs/common'

import { AgendaService } from './agenda.service'
import { AgendaResolver } from './agenda.resolver'

import { DataModule } from '../core/data.module'

@Module({
  imports: [DataModule],
  providers: [AgendaService, AgendaResolver],
  exports: [AgendaService],
})
export class AgendaModule {}
