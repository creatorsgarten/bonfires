import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateNestedOneWithoutAssignedTasksInput } from '../staff/staff-create-nested-one-without-assigned-tasks.input';

@InputType()
export class TaskAssigneesCreateWithoutTaskInput {

    @Field(() => StaffCreateNestedOneWithoutAssignedTasksInput, {nullable:false})
    staff!: StaffCreateNestedOneWithoutAssignedTasksInput;
}
