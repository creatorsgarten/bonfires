import { Injectable } from '@nestjs/common'

import { PrismaService } from '../core/prisma.service'

@Injectable()
export class StaffsService {
  constructor(private db: PrismaService) {}

  async findByEvent(eventId: number) {
    return this.db.staff.findMany({
      where: { eventId },
      include: { roles: true },
    })
  }
}
