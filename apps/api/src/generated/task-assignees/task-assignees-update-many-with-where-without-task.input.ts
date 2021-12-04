import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesScalarWhereInput } from './task-assignees-scalar-where.input';
import { TaskAssigneesUncheckedUpdateManyWithoutAssigneesInput } from './task-assignees-unchecked-update-many-without-assignees.input';

@InputType()
export class TaskAssigneesUpdateManyWithWhereWithoutTaskInput {

    @Field(() => TaskAssigneesScalarWhereInput, {nullable:false})
    where!: TaskAssigneesScalarWhereInput;

    @Field(() => TaskAssigneesUncheckedUpdateManyWithoutAssigneesInput, {nullable:false})
    data!: TaskAssigneesUncheckedUpdateManyWithoutAssigneesInput;
}
