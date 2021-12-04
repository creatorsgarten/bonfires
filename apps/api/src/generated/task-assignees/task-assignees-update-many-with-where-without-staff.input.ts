import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesScalarWhereInput } from './task-assignees-scalar-where.input';
import { TaskAssigneesUncheckedUpdateManyWithoutAssignedTasksInput } from './task-assignees-unchecked-update-many-without-assigned-tasks.input';

@InputType()
export class TaskAssigneesUpdateManyWithWhereWithoutStaffInput {

    @Field(() => TaskAssigneesScalarWhereInput, {nullable:false})
    where!: TaskAssigneesScalarWhereInput;

    @Field(() => TaskAssigneesUncheckedUpdateManyWithoutAssignedTasksInput, {nullable:false})
    data!: TaskAssigneesUncheckedUpdateManyWithoutAssignedTasksInput;
}
