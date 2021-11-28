import { Args, Int, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { UserService } from './user.service'

import { User } from '../generated/user'
import { Workspace } from '../generated/workspace'

const ID = { type: () => Int }

@Resolver(() => User)
export class UserResolver {
  constructor(readonly userService: UserService) {}

  @Query(() => User)
  user(@Args('id', ID) id: number) {
    return this.userService.findById(id)
  }

  @ResolveField()
  workspaces(): Workspace[] {
    return [{ id: 1, name: 'YCC 2', slug: 'ycc-2' }]
  }
}
