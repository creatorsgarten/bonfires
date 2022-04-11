import { Injectable } from '@nestjs/common'

import { EditAgendaBySlotDto } from './agenda.dto'

import { PrismaService } from '../core/prisma.service'

const range = (start: number, end: number) =>
  [...Array(end)].map((_, n) => n + start)

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

  async shiftAgenda(slot: number, dayId: number) {
    const maxSlot = await this.db.agenda.findFirst({
      orderBy: { slot: 'desc' },
      where: { slot: { gte: slot } },
    })

    if (!maxSlot || maxSlot.slot === null) return

    const slots = range(slot, maxSlot.slot)
      .map((_, n) => slot + n)
      .sort((a, b) => b - a)

    for (const slot of slots) {
      try {
        await this.db.agenda.update({
          where: { slot_dayId: { slot, dayId } },
          data: { slot: slot + 1 },
        })
      } catch (err) {}
    }
  }
}
