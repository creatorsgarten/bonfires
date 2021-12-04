import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';
import { AgendaCreateWithoutDayInput } from './agenda-create-without-day.input';

@InputType()
export class AgendaCreateOrConnectWithoutDayInput {

    @Field(() => AgendaWhereUniqueInput, {nullable:false})
    where!: AgendaWhereUniqueInput;

    @Field(() => AgendaCreateWithoutDayInput, {nullable:false})
    create!: AgendaCreateWithoutDayInput;
}
