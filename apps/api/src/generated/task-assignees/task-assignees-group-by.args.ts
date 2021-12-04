import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskAssigneesWhereInput } from './task-assignees-where.input';
import { TaskAssigneesOrderByWithAggregationInput } from './task-assignees-order-by-with-aggregation.input';
import { TaskAssigneesScalarFieldEnum } from './task-assignees-scalar-field.enum';
import { TaskAssigneesScalarWhereWithAggregatesInput } from './task-assignees-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TaskAssigneesCountAggregateInput } from './task-assignees-count-aggregate.input';
import { TaskAssigneesAvgAggregateInput } from './task-assignees-avg-aggregate.input';
import { TaskAssigneesSumAggregateInput } from './task-assignees-sum-aggregate.input';
import { TaskAssigneesMinAggregateInput } from './task-assignees-min-aggregate.input';
import { TaskAssigneesMaxAggregateInput } from './task-assignees-max-aggregate.input';

@ArgsType()
export class TaskAssigneesGroupByArgs {

    @Field(() => TaskAssigneesWhereInput, {nullable:true})
    where?: TaskAssigneesWhereInput;

    @Field(() => [TaskAssigneesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TaskAssigneesOrderByWithAggregationInput>;

    @Field(() => [TaskAssigneesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TaskAssigneesScalarFieldEnum>;

    @Field(() => TaskAssigneesScalarWhereWithAggregatesInput, {nullable:true})
    having?: TaskAssigneesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TaskAssigneesCountAggregateInput, {nullable:true})
    _count?: TaskAssigneesCountAggregateInput;

    @Field(() => TaskAssigneesAvgAggregateInput, {nullable:true})
    _avg?: TaskAssigneesAvgAggregateInput;

    @Field(() => TaskAssigneesSumAggregateInput, {nullable:true})
    _sum?: TaskAssigneesSumAggregateInput;

    @Field(() => TaskAssigneesMinAggregateInput, {nullable:true})
    _min?: TaskAssigneesMinAggregateInput;

    @Field(() => TaskAssigneesMaxAggregateInput, {nullable:true})
    _max?: TaskAssigneesMaxAggregateInput;
}
