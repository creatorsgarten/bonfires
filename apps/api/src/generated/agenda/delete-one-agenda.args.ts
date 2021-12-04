import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';

@ArgsType()
export class DeleteOneAgendaArgs {

    @Field(() => AgendaWhereUniqueInput, {nullable:false})
    where!: AgendaWhereUniqueInput;
}
