import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutAssigneesInput } from './task-create-without-assignees.input';
import { TaskCreateOrConnectWithoutAssigneesInput } from './task-create-or-connect-without-assignees.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutAssigneesInput {

    @Field(() => TaskCreateWithoutAssigneesInput, {nullable:true})
    create?: TaskCreateWithoutAssigneesInput;

    @Field(() => TaskCreateOrConnectWithoutAssigneesInput, {nullable:true})
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneesInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    connect?: TaskWhereUniqueInput;
}
