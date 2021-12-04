import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql'

import * as faker from 'faker'

import { WorkspacesService } from './workspaces.service'

import { ID, Workspace } from '../model'

import { UserService } from '../user/user.service'
import { EventsService } from '../events/events.service'

import { WorkspaceCreateInput } from '../generated/workspace/workspace-create.input'
import { PubSubService } from '../pubsub/pubsub.service'

@Resolver(() => Workspace)
export class WorkspacesResolver {
  constructor(
    private workspaceService: WorkspacesService,
    private eventService: EventsService,
    private userService: UserService,
    private pubsub: PubSubService
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

  @Mutation(() => Workspace)
  async createWorkspace(@Args('input') input: WorkspaceCreateInput) {
    const workspace = await this.workspaceService.create(input)
    this.pubsub.publish('workspaces', workspace)

    return workspace
  }

  @Subscription(() => Workspace, { name: 'workspaces' })
  onWorkspaces() {
    return this.pubsub.asyncIterator('workspaces')
  }
}
