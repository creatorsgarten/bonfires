import { Args, Query, Resolver } from '@nestjs/graphql'

import { ID, Duty } from '../models'

import { DutyService } from './duties.service'

@Resolver(() => Duty)
export class DutyResolver {
  constructor(private dutyService: DutyService) {}

  @Query(() => Duty)
  duty(@Args('id', ID) id: number) {
    return this.dutyService.get(id)
  }
}
