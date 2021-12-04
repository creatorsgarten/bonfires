import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DutyUncheckedCreateNestedManyWithoutDayInput } from '../duty/duty-unchecked-create-nested-many-without-day.input';
import { AgendaUncheckedCreateNestedManyWithoutDayInput } from '../agenda/agenda-unchecked-create-nested-many-without-day.input';

@InputType()
export class DayUncheckedCreateWithoutDirectorsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => DutyUncheckedCreateNestedManyWithoutDayInput, {nullable:true})
    duties?: DutyUncheckedCreateNestedManyWithoutDayInput;

    @Field(() => AgendaUncheckedCreateNestedManyWithoutDayInput, {nullable:true})
    agendas?: AgendaUncheckedCreateNestedManyWithoutDayInput;
}
