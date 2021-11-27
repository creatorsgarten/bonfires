import { Injectable } from '@nestjs/common'

import { PrismaClient, User, Prisma, Event } from '@prisma/client'

@Injectable()
export class UserService {
  db = new PrismaClient()

  async findAll(limit: number) {
    return this.db.user.findMany({ take: limit })
  }

  async findById(userId: number) {
    return this.db.user.findFirst({ where: { id: userId } })
  }

  async create(data: Prisma.UserCreateInput) {
    return this.db.user.create({ data })
  }

  async findStaffedEvents(userId: number): Promise<Event[]> {
    const user = await this.db.user.findUnique({
      where: { id: userId },
      include: { staffs: { include: { event: true } } },
    })

    return user.staffs.flatMap((s) => s.event)
  }
}
