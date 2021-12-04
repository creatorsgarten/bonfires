import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutAssigneesInput } from '../task/task-create-nested-one-without-assignees.input';
import { StaffCreateNestedOneWithoutAssignedTasksInput } from '../staff/staff-create-nested-one-without-assigned-tasks.input';

@InputType()
export class TaskAssigneesCreateInput {

    @Field(() => TaskCreateNestedOneWithoutAssigneesInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutAssigneesInput;

    @Field(() => StaffCreateNestedOneWithoutAssignedTasksInput, {nullable:false})
    staff!: StaffCreateNestedOneWithoutAssignedTasksInput;
}
