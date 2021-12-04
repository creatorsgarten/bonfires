import { Args, Int, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { WorkspacesService } from './workspaces.service'

const ID = { type: () => Int }

import { Workspace } from '../generated'

@Resolver(() => Workspace)
export class WorkspacesResolver {
  constructor(readonly workspaceService: WorkspacesService) {}

  @Query(() => Workspace)
  workspace(@Args('id', ID) id: number) {
    return this.workspaceService.findOne(id)
  }
}
