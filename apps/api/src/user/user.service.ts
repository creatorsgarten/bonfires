import { Prisma } from '@prisma/client'
import { Injectable } from '@nestjs/common'

import { PrismaService } from '../core/prisma.service'

@Injectable()
export class UserService {
  constructor(readonly db: PrismaService) {}

  async findAll(limit: number) {
    return this.db.user.findMany({ take: limit })
  }

  async findById(userId: number) {
    return this.db.user.findUnique({ where: { id: userId } })
  }

  async findByEmail(email: string) {
    return this.db.user.findUnique({ where: { email } })
  }

  async create(data: Prisma.UserCreateInput) {
    return this.db.user.create({ data })
  }

  async findByWorkspace(workspaceId: number) {
    return this.db.user.findMany({
      where: { workspaces: { some: { id: workspaceId } } },
      orderBy: { id: 'asc' },
    })
  }
}
