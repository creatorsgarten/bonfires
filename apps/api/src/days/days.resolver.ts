import { Parent, ResolveField, Resolver } from '@nestjs/graphql'

import { Day } from '../models'

@Resolver(() => Day)
export class DayResolver {
  @ResolveField()
  async duties(@Parent() day: Day) {
    return []
  }
}
