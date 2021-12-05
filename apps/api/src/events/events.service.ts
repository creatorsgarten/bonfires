import { Injectable } from '@nestjs/common'

import { PrismaService } from '../core/prisma.service'

@Injectable()
export class EventsService {
  constructor(readonly db: PrismaService) {}

  async get(id: number) {
    return this.db.event.findUnique({ where: { id } })
  }

  async findByWorkspace(workspaceId: number) {
    return this.db.event.findMany({ where: { workspaceId } })
  }
}
