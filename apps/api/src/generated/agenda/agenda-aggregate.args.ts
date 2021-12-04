import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaWhereInput } from './agenda-where.input';
import { AgendaOrderByWithRelationInput } from './agenda-order-by-with-relation.input';
import { AgendaWhereUniqueInput } from './agenda-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AgendaCountAggregateInput } from './agenda-count-aggregate.input';
import { AgendaAvgAggregateInput } from './agenda-avg-aggregate.input';
import { AgendaSumAggregateInput } from './agenda-sum-aggregate.input';
import { AgendaMinAggregateInput } from './agenda-min-aggregate.input';
import { AgendaMaxAggregateInput } from './agenda-max-aggregate.input';

@ArgsType()
export class AgendaAggregateArgs {

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

    @Field(() => AgendaCountAggregateInput, {nullable:true})
    _count?: AgendaCountAggregateInput;

    @Field(() => AgendaAvgAggregateInput, {nullable:true})
    _avg?: AgendaAvgAggregateInput;

    @Field(() => AgendaSumAggregateInput, {nullable:true})
    _sum?: AgendaSumAggregateInput;

    @Field(() => AgendaMinAggregateInput, {nullable:true})
    _min?: AgendaMinAggregateInput;

    @Field(() => AgendaMaxAggregateInput, {nullable:true})
    _max?: AgendaMaxAggregateInput;
}
