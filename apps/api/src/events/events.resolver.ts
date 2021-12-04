import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { ID, Event } from '../model'

import { EventsService } from '../events/events.service'
import { WorkspacesService } from '../workspaces/workspaces.service'

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
    if (!event.workspaceId) return null

    return this.workspaceService.findOne(event.workspaceId)
  }
}
