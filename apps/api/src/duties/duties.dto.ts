import { InputType } from '@nestjs/graphql'

import { DutySlotDayIdManagerIdCompoundUniqueInput } from '../generated/duty/duty-slot-day-id-manager-id-compound-unique.input'

@InputType()
export class EditDutyBySlotDto extends DutySlotDayIdManagerIdCompoundUniqueInput {
  title!: string
}
