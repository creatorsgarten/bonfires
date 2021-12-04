import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutAssigneesInput } from './task-update-without-assignees.input';
import { TaskCreateWithoutAssigneesInput } from './task-create-without-assignees.input';

@InputType()
export class TaskUpsertWithoutAssigneesInput {

    @Field(() => TaskUpdateWithoutAssigneesInput, {nullable:false})
    update!: TaskUpdateWithoutAssigneesInput;

    @Field(() => TaskCreateWithoutAssigneesInput, {nullable:false})
    create!: TaskCreateWithoutAssigneesInput;
}
