import { Prisma } from '@prisma/client'
import { Injectable } from '@nestjs/common'

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

  update(id: number, data: Prisma.DutyUpdateInput) {
    return this.db.duty.update({ data, where: { id } })
  }
}
