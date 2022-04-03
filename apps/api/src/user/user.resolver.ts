import {
  Args,
  Mutation,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql'

import { UserService } from './user.service'

import { ID, User, Workspace } from '../models'

import { WorkspacesService } from '../workspaces/workspaces.service'
import { UserCreateInput } from '../generated/user/user-create.input'

@Resolver(() => User)
export class UserResolver {
  constructor(
    readonly userService: UserService,
    readonly workspaceService: WorkspacesService
  ) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: UserCreateInput) {
    return this.userService.create(input)
  }

  @Query(() => User)
  user(@Args('id', ID) id: number) {
    return this.userService.findById(id)
  }

  @ResolveField(() => Workspace)
  async workspaces(@Parent() user: User) {
    return this.workspaceService.findByUser(user.id)
  }
}
