import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgendaWhereInput } from './agenda-where.input';

@InputType()
export class AgendaListRelationFilter {

    @Field(() => AgendaWhereInput, {nullable:true})
    every?: AgendaWhereInput;

    @Field(() => AgendaWhereInput, {nullable:true})
    some?: AgendaWhereInput;

    @Field(() => AgendaWhereInput, {nullable:true})
    none?: AgendaWhereInput;
}
