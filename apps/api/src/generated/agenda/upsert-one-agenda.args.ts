import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';
import { AgendaCreateInput } from './agenda-create.input';
import { AgendaUpdateInput } from './agenda-update.input';

@ArgsType()
export class UpsertOneAgendaArgs {

    @Field(() => AgendaWhereUniqueInput, {nullable:false})
    where!: AgendaWhereUniqueInput;

    @Field(() => AgendaCreateInput, {nullable:false})
    create!: AgendaCreateInput;

    @Field(() => AgendaUpdateInput, {nullable:false})
    update!: AgendaUpdateInput;
}
