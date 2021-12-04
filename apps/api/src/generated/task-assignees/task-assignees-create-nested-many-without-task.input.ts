import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesCreateWithoutTaskInput } from './task-assignees-create-without-task.input';
import { TaskAssigneesCreateOrConnectWithoutTaskInput } from './task-assignees-create-or-connect-without-task.input';
import { TaskAssigneesCreateManyTaskInputEnvelope } from './task-assignees-create-many-task-input-envelope.input';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';

@InputType()
export class TaskAssigneesCreateNestedManyWithoutTaskInput {

    @Field(() => [TaskAssigneesCreateWithoutTaskInput], {nullable:true})
    create?: Array<TaskAssigneesCreateWithoutTaskInput>;

    @Field(() => [TaskAssigneesCreateOrConnectWithoutTaskInput], {nullable:true})
    connectOrCreate?: Array<TaskAssigneesCreateOrConnectWithoutTaskInput>;

    @Field(() => TaskAssigneesCreateManyTaskInputEnvelope, {nullable:true})
    createMany?: TaskAssigneesCreateManyTaskInputEnvelope;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    connect?: Array<TaskAssigneesWhereUniqueInput>;
}
