import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { ID, Duty } from '../models'

import { DutyService } from './duties.service'

import { DutyCreateInput } from '../generated/duty/duty-create.input'
import { DutyUpdateInput } from '../generated/duty/duty-update.input'

@Resolver(() => Duty)
export class DutyResolver {
  constructor(private dutyService: DutyService) {}

  @Query(() => Duty)
  duty(@Args('id', ID) id: number) {
    return this.dutyService.get(id)
  }

  @Mutation(() => Duty)
  async createDuty(@Args('input') input: DutyCreateInput) {
    return this.dutyService.create(input)
  }

  @Mutation(() => Duty)
  async updateDuty(
    @Args('id', ID) id: number,
    @Args('input') input: DutyUpdateInput
  ) {
    return this.dutyService.update(id, input)
  }
}
