import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutAssigneesInput } from '../task/task-create-nested-one-without-assignees.input';

@InputType()
export class TaskAssigneesCreateWithoutStaffInput {

    @Field(() => TaskCreateNestedOneWithoutAssigneesInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutAssigneesInput;
}
