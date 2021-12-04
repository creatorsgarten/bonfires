import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaWhereInput } from './agenda-where.input';
import { AgendaOrderByWithAggregationInput } from './agenda-order-by-with-aggregation.input';
import { AgendaScalarFieldEnum } from './agenda-scalar-field.enum';
import { AgendaScalarWhereWithAggregatesInput } from './agenda-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AgendaCountAggregateInput } from './agenda-count-aggregate.input';
import { AgendaAvgAggregateInput } from './agenda-avg-aggregate.input';
import { AgendaSumAggregateInput } from './agenda-sum-aggregate.input';
import { AgendaMinAggregateInput } from './agenda-min-aggregate.input';
import { AgendaMaxAggregateInput } from './agenda-max-aggregate.input';

@ArgsType()
export class AgendaGroupByArgs {

    @Field(() => AgendaWhereInput, {nullable:true})
    where?: AgendaWhereInput;

    @Field(() => [AgendaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AgendaOrderByWithAggregationInput>;

    @Field(() => [AgendaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AgendaScalarFieldEnum>;

    @Field(() => AgendaScalarWhereWithAggregatesInput, {nullable:true})
    having?: AgendaScalarWhereWithAggregatesInput;

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
