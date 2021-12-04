import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { EventOrderByWithAggregationInput } from './event-order-by-with-aggregation.input';
import { EventScalarFieldEnum } from './event-scalar-field.enum';
import { EventScalarWhereWithAggregatesInput } from './event-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventCountAggregateInput } from './event-count-aggregate.input';
import { EventAvgAggregateInput } from './event-avg-aggregate.input';
import { EventSumAggregateInput } from './event-sum-aggregate.input';
import { EventMinAggregateInput } from './event-min-aggregate.input';
import { EventMaxAggregateInput } from './event-max-aggregate.input';

@ArgsType()
export class EventGroupByArgs {

    @Field(() => EventWhereInput, {nullable:true})
    where?: EventWhereInput;

    @Field(() => [EventOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventOrderByWithAggregationInput>;

    @Field(() => [EventScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EventScalarFieldEnum>;

    @Field(() => EventScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventCountAggregateInput, {nullable:true})
    _count?: EventCountAggregateInput;

    @Field(() => EventAvgAggregateInput, {nullable:true})
    _avg?: EventAvgAggregateInput;

    @Field(() => EventSumAggregateInput, {nullable:true})
    _sum?: EventSumAggregateInput;

    @Field(() => EventMinAggregateInput, {nullable:true})
    _min?: EventMinAggregateInput;

    @Field(() => EventMaxAggregateInput, {nullable:true})
    _max?: EventMaxAggregateInput;
}
