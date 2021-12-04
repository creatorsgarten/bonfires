import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'

import { Event } from '../generated'

import { EventsService } from '../events/events.service'
import { WorkspacesService } from '../workspaces/workspaces.service'

const ID = { type: () => Int }

@Resolver(() => Event)
export class EventsResolver {
  constructor(
    private eventService: EventsService,
    private workspaceService: WorkspacesService
  ) {}

  @Query(() => Event)
  event(@Args('id', ID) id: number) {
    return this.eventService.get(id)
  }

  @ResolveField()
  async workspace(@Parent() event: Event) {
    return this.workspaceService.findOne(event.workspaceId)
  }
}
