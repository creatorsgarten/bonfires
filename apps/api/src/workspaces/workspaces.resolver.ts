import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { WorkspacesService } from './workspaces.service'

import { ID, Workspace } from '../model'

import { UserService } from '../user/user.service'
import { EventsService } from '../events/events.service'

@Resolver(() => Workspace)
export class WorkspacesResolver {
  constructor(
    private workspaceService: WorkspacesService,
    private eventService: EventsService,
    private userService: UserService
  ) {}

  @Query(() => Workspace)
  workspace(@Args('id', ID) id: number) {
    return this.workspaceService.findOne(id)
  }

  @ResolveField()
  async events(@Parent() workspace: Workspace) {
    return this.eventService.findByWorkspace(workspace.id)
  }

  @ResolveField()
  async users(@Parent() workspace: Workspace) {
    return this.userService.findByWorkspace(workspace.id)
  }
}
