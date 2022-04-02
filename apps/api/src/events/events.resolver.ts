import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { ID, Event, Day } from '../models'

import { EventsService } from './events.service'

import { DaysService } from '../days/days.service'
import { StaffsService } from '../staffs/staffs.service'
import { WorkspacesService } from '../workspaces/workspaces.service'

@Resolver(() => Event)
export class EventsResolver {
  constructor(
    private eventService: EventsService,
    private workspaceService: WorkspacesService,
    private staffService: StaffsService,
    private dayService: DaysService
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

  @ResolveField(() => Day)
  async currentDay(@Parent() event: Event) {
    return this.dayService.getCurrentDay(event.id)
  }

  @ResolveField()
  async days(@Parent() event: Event) {
    return this.dayService.findByEvent(event.id)
  }

  @ResolveField()
  async staffs(@Parent() event: Event) {
    return this.staffService.findByEvent(event.id)
  }
}
