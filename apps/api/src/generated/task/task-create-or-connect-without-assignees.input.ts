import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskCreateWithoutAssigneesInput } from './task-create-without-assignees.input';

@InputType()
export class TaskCreateOrConnectWithoutAssigneesInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutAssigneesInput, {nullable:false})
    create!: TaskCreateWithoutAssigneesInput;
}
