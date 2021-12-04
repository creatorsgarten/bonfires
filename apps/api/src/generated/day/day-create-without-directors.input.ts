import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateNestedManyWithoutDayInput } from '../duty/duty-create-nested-many-without-day.input';
import { AgendaCreateNestedManyWithoutDayInput } from '../agenda/agenda-create-nested-many-without-day.input';
import { EventCreateNestedOneWithoutDaysInput } from '../event/event-create-nested-one-without-days.input';

@InputType()
export class DayCreateWithoutDirectorsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => DutyCreateNestedManyWithoutDayInput, {nullable:true})
    duties?: DutyCreateNestedManyWithoutDayInput;

    @Field(() => AgendaCreateNestedManyWithoutDayInput, {nullable:true})
    agendas?: AgendaCreateNestedManyWithoutDayInput;

    @Field(() => EventCreateNestedOneWithoutDaysInput, {nullable:false})
    event!: EventCreateNestedOneWithoutDaysInput;
}
