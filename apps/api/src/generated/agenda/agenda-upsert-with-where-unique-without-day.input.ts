import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';
import { AgendaUpdateWithoutDayInput } from './agenda-update-without-day.input';
import { AgendaCreateWithoutDayInput } from './agenda-create-without-day.input';

@InputType()
export class AgendaUpsertWithWhereUniqueWithoutDayInput {

    @Field(() => AgendaWhereUniqueInput, {nullable:false})
    where!: AgendaWhereUniqueInput;

    @Field(() => AgendaUpdateWithoutDayInput, {nullable:false})
    update!: AgendaUpdateWithoutDayInput;

    @Field(() => AgendaCreateWithoutDayInput, {nullable:false})
    create!: AgendaCreateWithoutDayInput;
}
