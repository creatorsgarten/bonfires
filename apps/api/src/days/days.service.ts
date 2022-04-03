import { Injectable } from '@nestjs/common'

import { PrismaService } from '../core/prisma.service'

@Injectable()
export class DaysService {
  constructor(readonly db: PrismaService) {}

  async get(id: number) {
    return this.db.day.findUnique({ where: { id } })
  }

  async findByEvent(eventId: number) {
    return this.db.day.findMany({
      where: { eventId },
      include: { duties: { include: { manager: true } } },
    })
  }

  // TODO: add logic to determine which day we are in.
  async getCurrentDay(eventId: number) {
    return this.db.day.findFirst({
      where: { eventId },
      include: {
        roles: true,
        agendas: true,

        duties: {
          include: {
            manager: true,
            assignees: { include: { user: true } },
          },
        },
      },
    })
  }
}
