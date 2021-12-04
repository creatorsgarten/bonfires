import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaUpdateInput } from './agenda-update.input';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';

@ArgsType()
export class UpdateOneAgendaArgs {

    @Field(() => AgendaUpdateInput, {nullable:false})
    data!: AgendaUpdateInput;

    @Field(() => AgendaWhereUniqueInput, {nullable:false})
    where!: AgendaWhereUniqueInput;
}
