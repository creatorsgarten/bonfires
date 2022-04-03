import { Prisma } from '@prisma/client'
import { Injectable } from '@nestjs/common'

import { EditAgendaBySlotDto } from './agenda.dto'

import { PrismaService } from '../core/prisma.service'

@Injectable()
export class AgendaService {
  constructor(readonly db: PrismaService) {}

  updateBySlot(data: EditAgendaBySlotDto) {
    const { slot, dayId, title = '' } = data

    return this.db.agenda.upsert({
      where: { slot_dayId: { slot, dayId } },
      create: {
        slot,
        dayId,
        title,
      },
      update: {
        title,
      },
    })
  }
}
