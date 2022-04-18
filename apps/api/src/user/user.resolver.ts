import {
  Args,
  Mutation,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql'

import { SystemRole } from '@prisma/client'

import { UserService } from './user.service'

import { ID, User, Workspace } from '../models'

import { AuthUser } from '../auth/user.decorator'
import { Public } from '../auth/public.decorator'

import { WorkspacesService } from '../workspaces/workspaces.service'

import { UserCreateInput } from '../generated/user/user-create.input'

@Resolver(() => User)
export class UserResolver {
  constructor(
    readonly userService: UserService,
    readonly workspaceService: WorkspacesService
  ) {}

  @Public()
  @Mutation(() => User)
  async createUser(@Args('input') input: UserCreateInput) {
    return this.userService.create({ ...input, role: SystemRole.Member })
  }

  @Query(() => User)
  me(@AuthUser() user: AuthUser): Promise<User | null> {
    return this.userService.findById(user.id)
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
