import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateNestedManyWithoutDirectorDayInput } from '../staff/staff-create-nested-many-without-director-day.input';
import { AgendaCreateNestedManyWithoutDayInput } from '../agenda/agenda-create-nested-many-without-day.input';
import { EventCreateNestedOneWithoutDaysInput } from '../event/event-create-nested-one-without-days.input';

@InputType()
export class DayCreateWithoutDutiesInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => StaffCreateNestedManyWithoutDirectorDayInput, {nullable:true})
    directors?: StaffCreateNestedManyWithoutDirectorDayInput;

    @Field(() => AgendaCreateNestedManyWithoutDayInput, {nullable:true})
    agendas?: AgendaCreateNestedManyWithoutDayInput;

    @Field(() => EventCreateNestedOneWithoutDaysInput, {nullable:false})
    event!: EventCreateNestedOneWithoutDaysInput;
}
