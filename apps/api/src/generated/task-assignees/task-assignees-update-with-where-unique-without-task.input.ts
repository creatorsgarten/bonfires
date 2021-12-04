import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { TaskAssigneesUpdateWithoutTaskInput } from './task-assignees-update-without-task.input';

@InputType()
export class TaskAssigneesUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:false})
    where!: TaskAssigneesWhereUniqueInput;

    @Field(() => TaskAssigneesUpdateWithoutTaskInput, {nullable:false})
    data!: TaskAssigneesUpdateWithoutTaskInput;
}
