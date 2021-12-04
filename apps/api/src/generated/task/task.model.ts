import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Squad } from '../squad/squad.model';
import { Int } from '@nestjs/graphql';
import { Staff } from '../staff/staff.model';
import { TaskAssignees } from '../task-assignees/task-assignees.model';
import { Duty } from '../duty/duty.model';
import { TaskCount } from './task-count.output';

@ObjectType()
export class Task {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Squad, {nullable:true})
    squad?: Squad | null;

    @Field(() => Int, {nullable:true})
    squadId!: number | null;

    @Field(() => Staff, {nullable:true})
    manager?: Staff | null;

    @Field(() => Int, {nullable:true})
    managerId!: number | null;

    @Field(() => Date, {nullable:true})
    dueDate!: Date | null;

    @Field(() => [TaskAssignees], {nullable:true})
    assignees?: Array<TaskAssignees>;

    @Field(() => Duty, {nullable:true})
    duty?: Duty | null;

    @Field(() => Int, {nullable:true})
    dutyId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
