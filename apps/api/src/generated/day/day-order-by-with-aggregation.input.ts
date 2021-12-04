import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DayCountOrderByAggregateInput } from './day-count-order-by-aggregate.input';
import { DayAvgOrderByAggregateInput } from './day-avg-order-by-aggregate.input';
import { DayMaxOrderByAggregateInput } from './day-max-order-by-aggregate.input';
import { DayMinOrderByAggregateInput } from './day-min-order-by-aggregate.input';
import { DaySumOrderByAggregateInput } from './day-sum-order-by-aggregate.input';

@InputType()
export class DayOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startsAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => DayCountOrderByAggregateInput, {nullable:true})
    _count?: DayCountOrderByAggregateInput;

    @Field(() => DayAvgOrderByAggregateInput, {nullable:true})
    _avg?: DayAvgOrderByAggregateInput;

    @Field(() => DayMaxOrderByAggregateInput, {nullable:true})
    _max?: DayMaxOrderByAggregateInput;

    @Field(() => DayMinOrderByAggregateInput, {nullable:true})
    _min?: DayMinOrderByAggregateInput;

    @Field(() => DaySumOrderByAggregateInput, {nullable:true})
    _sum?: DaySumOrderByAggregateInput;
}
