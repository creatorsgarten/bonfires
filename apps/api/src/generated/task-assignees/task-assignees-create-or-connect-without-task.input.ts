import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { TaskAssigneesCreateWithoutTaskInput } from './task-assignees-create-without-task.input';

@InputType()
export class TaskAssigneesCreateOrConnectWithoutTaskInput {

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:false})
    where!: TaskAssigneesWhereUniqueInput;

    @Field(() => TaskAssigneesCreateWithoutTaskInput, {nullable:false})
    create!: TaskAssigneesCreateWithoutTaskInput;
}
