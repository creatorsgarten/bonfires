import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskAssigneesCountOrderByAggregateInput } from './task-assignees-count-order-by-aggregate.input';
import { TaskAssigneesAvgOrderByAggregateInput } from './task-assignees-avg-order-by-aggregate.input';
import { TaskAssigneesMaxOrderByAggregateInput } from './task-assignees-max-order-by-aggregate.input';
import { TaskAssigneesMinOrderByAggregateInput } from './task-assignees-min-order-by-aggregate.input';
import { TaskAssigneesSumOrderByAggregateInput } from './task-assignees-sum-order-by-aggregate.input';

@InputType()
export class TaskAssigneesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    staffId?: keyof typeof SortOrder;

    @Field(() => TaskAssigneesCountOrderByAggregateInput, {nullable:true})
    _count?: TaskAssigneesCountOrderByAggregateInput;

    @Field(() => TaskAssigneesAvgOrderByAggregateInput, {nullable:true})
    _avg?: TaskAssigneesAvgOrderByAggregateInput;

    @Field(() => TaskAssigneesMaxOrderByAggregateInput, {nullable:true})
    _max?: TaskAssigneesMaxOrderByAggregateInput;

    @Field(() => TaskAssigneesMinOrderByAggregateInput, {nullable:true})
    _min?: TaskAssigneesMinOrderByAggregateInput;

    @Field(() => TaskAssigneesSumOrderByAggregateInput, {nullable:true})
    _sum?: TaskAssigneesSumOrderByAggregateInput;
}
