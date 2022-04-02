import { OmitType, Field, ObjectType } from '@nestjs/graphql'

import { Day } from '../generated/day/day.model'
import { Duty } from '../generated/duty/duty.model'
import { Staff } from '../generated/staff/staff.model'

@ObjectType()
export class DayDuty extends OmitType(Duty, ['assignees']) {
  @Field(() => [Staff], { nullable: true })
  assignees?: Staff[]
}

@ObjectType()
export class CurrentDay extends OmitType(Day, ['duties']) {
  @Field(() => [DayDuty], { nullable: true })
  duties?: DayDuty[]
}
