import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'

import { UserService } from './user.service'

import { User } from '../generated'
import { WorkspacesService } from '../workspaces/workspaces.service'

const ID = { type: () => Int }

@Resolver(() => User)
export class UserResolver {
  constructor(
    readonly userService: UserService,
    readonly workspaceService: WorkspacesService
  ) {}

  @Query(() => User)
  user(@Args('id', ID) id: number) {
    return this.userService.findById(id)
  }

  @ResolveField()
  async workspaces(@Parent() user: User) {
    return this.workspaceService.findByUser(user.id)
  }
}
