import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { AgendaService } from './agenda.service'
import { EditAgendaBySlotDto } from './agenda.dto'

import { Agenda } from '../generated/agenda/agenda.model'

@Resolver(() => Agenda)
export class AgendaResolver {
  constructor(private agendaService: AgendaService) {}

  @Mutation(() => Agenda)
  async updateAgendaBySlot(@Args('input') input: EditAgendaBySlotDto) {
    return this.agendaService.updateBySlot(input)
  }

  @Mutation(() => Boolean)
  async shiftAgenda(@Args('slot') slot: number, @Args('dayId') dayId: number) {
    await this.agendaService.shiftAgenda(slot, dayId)

    return true
  }
}
