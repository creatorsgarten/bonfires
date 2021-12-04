import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'

import { WorkspacesService } from './workspaces.service'

import { Workspace } from '../generated'
import { EventsService } from '../events/events.service'

const ID = { type: () => Int }

@Resolver(() => Workspace)
export class WorkspacesResolver {
  constructor(
    private workspaceService: WorkspacesService,
    private eventService: EventsService
  ) {}

  @Query(() => Workspace)
  workspace(@Args('id', ID) id: number) {
    return this.workspaceService.findOne(id)
  }

  @ResolveField()
  async events(@Parent() workspace: Workspace) {
    return this.eventService.findByWorkspace(workspace.id)
  }
}
