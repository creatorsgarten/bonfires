import { Prisma } from '@prisma/client'
import { Injectable } from '@nestjs/common'

import { EditDutyBySlotDto } from './duties.dto'

import { PrismaService } from '../core/prisma.service'

@Injectable()
export class DutyService {
  constructor(readonly db: PrismaService) {}

  async get(id: number) {
    return this.db.duty.findUnique({ where: { id } })
  }

  create(data: Prisma.DutyCreateInput) {
    return this.db.duty.create({ data })
  }

  updateById(id: number, data: Prisma.DutyUpdateInput) {
    return this.db.duty.update({ data, where: { id } })
  }

  updateBySlot(data: EditDutyBySlotDto) {
    const { slot, dayId, managerId } = data

    return this.db.duty.upsert({
      where: {
        slot_dayId_managerId: { slot, dayId, managerId },
      },
      create: {
        title: data.title ?? '',

        slot,
        dayId,
        managerId,
      },
      update: {
        title: data.title,
      },
    })
  }
}
