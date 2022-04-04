import { Injectable } from '@nestjs/common'

import { StaffsService } from '../staffs/staffs.service'
import { PrismaService } from '../core/prisma.service'

@Injectable()
export class DaysService {
  constructor(readonly db: PrismaService, readonly staff: StaffsService) {}

  async get(id: number) {
    return this.db.day.findUnique({ where: { id } })
  }

  async findByEvent(eventId: number) {
    return this.db.day.findMany({
      where: { eventId },
      include: { duties: { include: { manager: true } } },
    })
  }

  // TODO: add logic to determine which day of the event we are in.
  async getCurrentDay(eventId: number, { owned = false, userId = 0 } = {}) {
    return this.db.day.findFirst({
      where: { eventId },
      include: {
        roles: true,
        agendas: true,

        duties: {
          orderBy: { slot: 'asc' },

          include: {
            manager: true,
            assignees: { include: { user: true } },
          },

          // Filter only the owned roles once owned is true.
          ...(owned && {
            where: {
              managerId: { in: await this.staff.rolesByUser(eventId, userId) },
            },
          }),
        },
      },
    })
  }
}
