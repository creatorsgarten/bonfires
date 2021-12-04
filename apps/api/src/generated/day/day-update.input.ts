import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateManyWithoutDirectorDayInput } from '../staff/staff-update-many-without-director-day.input';
import { DutyUpdateManyWithoutDayInput } from '../duty/duty-update-many-without-day.input';
import { AgendaUpdateManyWithoutDayInput } from '../agenda/agenda-update-many-without-day.input';
import { EventUpdateOneRequiredWithoutDaysInput } from '../event/event-update-one-required-without-days.input';

@InputType()
export class DayUpdateInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => StaffUpdateManyWithoutDirectorDayInput, {nullable:true})
    directors?: StaffUpdateManyWithoutDirectorDayInput;

    @Field(() => DutyUpdateManyWithoutDayInput, {nullable:true})
    duties?: DutyUpdateManyWithoutDayInput;

    @Field(() => AgendaUpdateManyWithoutDayInput, {nullable:true})
    agendas?: AgendaUpdateManyWithoutDayInput;

    @Field(() => EventUpdateOneRequiredWithoutDaysInput, {nullable:true})
    event?: EventUpdateOneRequiredWithoutDaysInput;
}
