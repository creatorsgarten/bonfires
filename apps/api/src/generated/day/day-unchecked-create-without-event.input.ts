import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUncheckedCreateNestedManyWithoutDirectorDayInput } from '../staff/staff-unchecked-create-nested-many-without-director-day.input';
import { DutyUncheckedCreateNestedManyWithoutDayInput } from '../duty/duty-unchecked-create-nested-many-without-day.input';
import { AgendaUncheckedCreateNestedManyWithoutDayInput } from '../agenda/agenda-unchecked-create-nested-many-without-day.input';

@InputType()
export class DayUncheckedCreateWithoutEventInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => StaffUncheckedCreateNestedManyWithoutDirectorDayInput, {nullable:true})
    directors?: StaffUncheckedCreateNestedManyWithoutDirectorDayInput;

    @Field(() => DutyUncheckedCreateNestedManyWithoutDayInput, {nullable:true})
    duties?: DutyUncheckedCreateNestedManyWithoutDayInput;

    @Field(() => AgendaUncheckedCreateNestedManyWithoutDayInput, {nullable:true})
    agendas?: AgendaUncheckedCreateNestedManyWithoutDayInput;
}
