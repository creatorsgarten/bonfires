import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StaffCountOrderByAggregateInput } from './staff-count-order-by-aggregate.input';
import { StaffAvgOrderByAggregateInput } from './staff-avg-order-by-aggregate.input';
import { StaffMaxOrderByAggregateInput } from './staff-max-order-by-aggregate.input';
import { StaffMinOrderByAggregateInput } from './staff-min-order-by-aggregate.input';
import { StaffSumOrderByAggregateInput } from './staff-sum-order-by-aggregate.input';

@InputType()
export class StaffOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    directorDayId?: keyof typeof SortOrder;

    @Field(() => StaffCountOrderByAggregateInput, {nullable:true})
    _count?: StaffCountOrderByAggregateInput;

    @Field(() => StaffAvgOrderByAggregateInput, {nullable:true})
    _avg?: StaffAvgOrderByAggregateInput;

    @Field(() => StaffMaxOrderByAggregateInput, {nullable:true})
    _max?: StaffMaxOrderByAggregateInput;

    @Field(() => StaffMinOrderByAggregateInput, {nullable:true})
    _min?: StaffMinOrderByAggregateInput;

    @Field(() => StaffSumOrderByAggregateInput, {nullable:true})
    _sum?: StaffSumOrderByAggregateInput;
}
