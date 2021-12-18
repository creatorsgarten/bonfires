import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { ID, Event } from '../model'

import { EventsService } from "./events.service"

import { StaffsService } from '../staffs/staffs.service'
import { WorkspacesService } from '../workspaces/workspaces.service'


@Resolver(() => Event)
export class EventsResolver {
  constructor(
    private eventService: EventsService,
    private workspaceService: WorkspacesService,
    private staffService: StaffsService
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

  @ResolveField()
  async days(@Parent() event: Event) {
    return []
  }

  @ResolveField()
  async staffs(@Parent() event: Event) {
    return this.staffService.findByEvent(event.id)
  }
}
