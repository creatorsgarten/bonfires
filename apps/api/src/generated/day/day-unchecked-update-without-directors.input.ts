import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DutyUncheckedUpdateManyWithoutDayInput } from '../duty/duty-unchecked-update-many-without-day.input';
import { AgendaUncheckedUpdateManyWithoutDayInput } from '../agenda/agenda-unchecked-update-many-without-day.input';

@InputType()
export class DayUncheckedUpdateWithoutDirectorsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => Int, {nullable:true})
    eventId?: number;

    @Field(() => DutyUncheckedUpdateManyWithoutDayInput, {nullable:true})
    duties?: DutyUncheckedUpdateManyWithoutDayInput;

    @Field(() => AgendaUncheckedUpdateManyWithoutDayInput, {nullable:true})
    agendas?: AgendaUncheckedUpdateManyWithoutDayInput;
}
