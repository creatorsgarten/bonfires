import {
  Args,
  Directive,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
  Int,
} from '@nestjs/graphql'

import { WorkspacesService } from './workspaces.service'

import { ID, Workspace } from '../model'

import { UserService } from '../user/user.service'
import { EventsService } from '../events/events.service'
import { PubSubService } from '../core/pubsub.service'

import { WorkspaceCreateInput } from '../generated/workspace/workspace-create.input'

@Resolver(() => Workspace)
export class WorkspacesResolver {
  constructor(
    private workspaceService: WorkspacesService,
    private eventService: EventsService,
    private userService: UserService,
    private pubsub: PubSubService
  ) {}

  @Directive('@live')
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

  @Mutation(() => Workspace)
  async createWorkspace(@Args('input') input: WorkspaceCreateInput) {
    const workspace = await this.workspaceService.create(input)
    this.pubsub.publish('onCreateWorkspace', workspace)

    return workspace
  }

  @Subscription(() => Workspace)
  onCreateWorkspace() {
    return this.pubsub.asyncIterator('onCreateWorkspace')
  }
}
