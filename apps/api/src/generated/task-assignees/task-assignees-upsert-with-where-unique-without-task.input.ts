import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { TaskAssigneesUpdateWithoutTaskInput } from './task-assignees-update-without-task.input';
import { TaskAssigneesCreateWithoutTaskInput } from './task-assignees-create-without-task.input';

@InputType()
export class TaskAssigneesUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:false})
    where!: TaskAssigneesWhereUniqueInput;

    @Field(() => TaskAssigneesUpdateWithoutTaskInput, {nullable:false})
    update!: TaskAssigneesUpdateWithoutTaskInput;

    @Field(() => TaskAssigneesCreateWithoutTaskInput, {nullable:false})
    create!: TaskAssigneesCreateWithoutTaskInput;
}
