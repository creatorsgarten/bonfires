import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskAssigneesCountAggregate } from './task-assignees-count-aggregate.output';
import { TaskAssigneesAvgAggregate } from './task-assignees-avg-aggregate.output';
import { TaskAssigneesSumAggregate } from './task-assignees-sum-aggregate.output';
import { TaskAssigneesMinAggregate } from './task-assignees-min-aggregate.output';
import { TaskAssigneesMaxAggregate } from './task-assignees-max-aggregate.output';

@ObjectType()
export class TaskAssigneesGroupBy {

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Int, {nullable:false})
    staffId!: number;

    @Field(() => TaskAssigneesCountAggregate, {nullable:true})
    _count?: TaskAssigneesCountAggregate;

    @Field(() => TaskAssigneesAvgAggregate, {nullable:true})
    _avg?: TaskAssigneesAvgAggregate;

    @Field(() => TaskAssigneesSumAggregate, {nullable:true})
    _sum?: TaskAssigneesSumAggregate;

    @Field(() => TaskAssigneesMinAggregate, {nullable:true})
    _min?: TaskAssigneesMinAggregate;

    @Field(() => TaskAssigneesMaxAggregate, {nullable:true})
    _max?: TaskAssigneesMaxAggregate;
}
