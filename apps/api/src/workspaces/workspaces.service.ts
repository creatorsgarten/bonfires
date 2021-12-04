import { Prisma } from '@prisma/client'
import { Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class WorkspacesService {
  constructor(readonly db: PrismaService) {}

  create(data: Prisma.WorkspaceCreateInput) {
    return this.db.workspace.create({ data })
  }

  findByUser(id: number) {
    return this.db.workspace.findMany({ where: { users: { some: { id } } } })
  }

  findAll() {
    return this.db.workspace.findMany()
  }

  findOne(id: number) {
    return this.db.workspace.findUnique({ where: { id } })
  }

  update(id: number, data: Prisma.WorkspaceUpdateInput) {
    return this.db.workspace.update({ where: { id }, data })
  }

  remove(id: number) {
    return this.db.workspace.delete({ where: { id } })
  }
}
