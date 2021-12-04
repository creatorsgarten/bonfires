import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyUpdateManyWithoutDayInput } from '../duty/duty-update-many-without-day.input';
import { AgendaUpdateManyWithoutDayInput } from '../agenda/agenda-update-many-without-day.input';
import { EventUpdateOneRequiredWithoutDaysInput } from '../event/event-update-one-required-without-days.input';

@InputType()
export class DayUpdateWithoutDirectorsInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => DutyUpdateManyWithoutDayInput, {nullable:true})
    duties?: DutyUpdateManyWithoutDayInput;

    @Field(() => AgendaUpdateManyWithoutDayInput, {nullable:true})
    agendas?: AgendaUpdateManyWithoutDayInput;

    @Field(() => EventUpdateOneRequiredWithoutDaysInput, {nullable:true})
    event?: EventUpdateOneRequiredWithoutDaysInput;
}
