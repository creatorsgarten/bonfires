import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Event } from '../event/event.model';
import { Task } from '../task/task.model';
import { TaskAssignees } from '../task-assignees/task-assignees.model';
import { Day } from '../day/day.model';
import { StaffCount } from './staff-count.output';

@ObjectType()
export class Staff {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    displayName!: string | null;

    @Field(() => [Role], {nullable:true})
    roles?: Array<Role>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Event, {nullable:false})
    event?: Event;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => [Task], {nullable:true})
    managedTasks?: Array<Task>;

    @Field(() => [TaskAssignees], {nullable:true})
    assignedTasks?: Array<TaskAssignees>;

    @Field(() => Day, {nullable:true})
    directorDay?: Day | null;

    @Field(() => Int, {nullable:true})
    directorDayId!: number | null;

    @Field(() => StaffCount, {nullable:false})
    _count?: StaffCount;
}
