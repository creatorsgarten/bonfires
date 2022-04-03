import { Injectable } from '@nestjs/common'

import { PrismaService } from '../core/prisma.service'

@Injectable()
export class DutyService {
  constructor(readonly db: PrismaService) {}

  async get(id: number) {
    return this.db.duty.findUnique({ where: { id } })
  }
}
