import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Task } from '../task/task.model';
import { Int } from '@nestjs/graphql';
import { Staff } from '../staff/staff.model';

@ObjectType()
export class TaskAssignees {

    @Field(() => Task, {nullable:false})
    task?: Task;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Staff, {nullable:false})
    staff?: Staff;

    @Field(() => Int, {nullable:false})
    staffId!: number;
}
