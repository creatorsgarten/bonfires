import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';
import { AgendaUpdateWithoutDayInput } from './agenda-update-without-day.input';

@InputType()
export class AgendaUpdateWithWhereUniqueWithoutDayInput {

    @Field(() => AgendaWhereUniqueInput, {nullable:false})
    where!: AgendaWhereUniqueInput;

    @Field(() => AgendaUpdateWithoutDayInput, {nullable:false})
    data!: AgendaUpdateWithoutDayInput;
}
