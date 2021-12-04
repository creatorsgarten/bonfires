import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaWhereInput } from './agenda-where.input';
import { AgendaOrderByWithRelationInput } from './agenda-order-by-with-relation.input';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AgendaScalarFieldEnum } from './agenda-scalar-field.enum';

@ArgsType()
export class FindManyAgendaArgs {

    @Field(() => AgendaWhereInput, {nullable:true})
    where?: AgendaWhereInput;

    @Field(() => [AgendaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AgendaOrderByWithRelationInput>;

    @Field(() => AgendaWhereUniqueInput, {nullable:true})
    cursor?: AgendaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AgendaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AgendaScalarFieldEnum>;
}
