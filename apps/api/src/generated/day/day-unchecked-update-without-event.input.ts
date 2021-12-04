import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUncheckedUpdateManyWithoutDirectorDayInput } from '../staff/staff-unchecked-update-many-without-director-day.input';
import { DutyUncheckedUpdateManyWithoutDayInput } from '../duty/duty-unchecked-update-many-without-day.input';
import { AgendaUncheckedUpdateManyWithoutDayInput } from '../agenda/agenda-unchecked-update-many-without-day.input';

@InputType()
export class DayUncheckedUpdateWithoutEventInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => StaffUncheckedUpdateManyWithoutDirectorDayInput, {nullable:true})
    directors?: StaffUncheckedUpdateManyWithoutDirectorDayInput;

    @Field(() => DutyUncheckedUpdateManyWithoutDayInput, {nullable:true})
    duties?: DutyUncheckedUpdateManyWithoutDayInput;

    @Field(() => AgendaUncheckedUpdateManyWithoutDayInput, {nullable:true})
    agendas?: AgendaUncheckedUpdateManyWithoutDayInput;
}
