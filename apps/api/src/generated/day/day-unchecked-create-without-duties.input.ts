import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUncheckedCreateNestedManyWithoutDirectorDayInput } from '../staff/staff-unchecked-create-nested-many-without-director-day.input';
import { AgendaUncheckedCreateNestedManyWithoutDayInput } from '../agenda/agenda-unchecked-create-nested-many-without-day.input';

@InputType()
export class DayUncheckedCreateWithoutDutiesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => StaffUncheckedCreateNestedManyWithoutDirectorDayInput, {nullable:true})
    directors?: StaffUncheckedCreateNestedManyWithoutDirectorDayInput;

    @Field(() => AgendaUncheckedCreateNestedManyWithoutDayInput, {nullable:true})
    agendas?: AgendaUncheckedCreateNestedManyWithoutDayInput;
}
