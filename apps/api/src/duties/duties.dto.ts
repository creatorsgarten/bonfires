import { Field, InputType } from '@nestjs/graphql'

import { DutySlotDayIdManagerIdCompoundUniqueInput } from '../generated/duty/duty-slot-day-id-manager-id-compound-unique.input'

@InputType()
export class EditDutyBySlotDto extends DutySlotDayIdManagerIdCompoundUniqueInput {
  @Field(() => String, { nullable: true })
  title!: string
}
