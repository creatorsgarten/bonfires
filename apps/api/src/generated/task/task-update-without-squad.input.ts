import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateOneWithoutManagedTasksInput } from '../staff/staff-update-one-without-managed-tasks.input';
import { TaskAssigneesUpdateManyWithoutTaskInput } from '../task-assignees/task-assignees-update-many-without-task.input';
import { DutyUpdateOneWithoutTasksInput } from '../duty/duty-update-one-without-tasks.input';

@InputType()
export class TaskUpdateWithoutSquadInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => StaffUpdateOneWithoutManagedTasksInput, {nullable:true})
    manager?: StaffUpdateOneWithoutManagedTasksInput;

    @Field(() => TaskAssigneesUpdateManyWithoutTaskInput, {nullable:true})
    assignees?: TaskAssigneesUpdateManyWithoutTaskInput;

    @Field(() => DutyUpdateOneWithoutTasksInput, {nullable:true})
    duty?: DutyUpdateOneWithoutTasksInput;
}
