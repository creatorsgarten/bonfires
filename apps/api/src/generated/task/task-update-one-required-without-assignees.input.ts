import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutAssigneesInput } from './task-create-without-assignees.input';
import { TaskCreateOrConnectWithoutAssigneesInput } from './task-create-or-connect-without-assignees.input';
import { TaskUpsertWithoutAssigneesInput } from './task-upsert-without-assignees.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutAssigneesInput } from './task-update-without-assignees.input';

@InputType()
export class TaskUpdateOneRequiredWithoutAssigneesInput {

    @Field(() => TaskCreateWithoutAssigneesInput, {nullable:true})
    create?: TaskCreateWithoutAssigneesInput;

    @Field(() => TaskCreateOrConnectWithoutAssigneesInput, {nullable:true})
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneesInput;

    @Field(() => TaskUpsertWithoutAssigneesInput, {nullable:true})
    upsert?: TaskUpsertWithoutAssigneesInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutAssigneesInput, {nullable:true})
    update?: TaskUpdateWithoutAssigneesInput;
}
