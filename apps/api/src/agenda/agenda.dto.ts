import { Field, InputType } from '@nestjs/graphql'

import { AgendaSlotDayIdCompoundUniqueInput } from '../generated/agenda/agenda-slot-day-id-compound-unique.input'

@InputType()
export class EditAgendaBySlotDto extends AgendaSlotDayIdCompoundUniqueInput {
  @Field(() => String, { nullable: true })
  title!: string
}
