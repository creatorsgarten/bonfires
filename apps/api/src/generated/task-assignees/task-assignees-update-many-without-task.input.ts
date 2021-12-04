import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesCreateWithoutTaskInput } from './task-assignees-create-without-task.input';
import { TaskAssigneesCreateOrConnectWithoutTaskInput } from './task-assignees-create-or-connect-without-task.input';
import { TaskAssigneesUpsertWithWhereUniqueWithoutTaskInput } from './task-assignees-upsert-with-where-unique-without-task.input';
import { TaskAssigneesCreateManyTaskInputEnvelope } from './task-assignees-create-many-task-input-envelope.input';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { TaskAssigneesUpdateWithWhereUniqueWithoutTaskInput } from './task-assignees-update-with-where-unique-without-task.input';
import { TaskAssigneesUpdateManyWithWhereWithoutTaskInput } from './task-assignees-update-many-with-where-without-task.input';
import { TaskAssigneesScalarWhereInput } from './task-assignees-scalar-where.input';

@InputType()
export class TaskAssigneesUpdateManyWithoutTaskInput {

    @Field(() => [TaskAssigneesCreateWithoutTaskInput], {nullable:true})
    create?: Array<TaskAssigneesCreateWithoutTaskInput>;

    @Field(() => [TaskAssigneesCreateOrConnectWithoutTaskInput], {nullable:true})
    connectOrCreate?: Array<TaskAssigneesCreateOrConnectWithoutTaskInput>;

    @Field(() => [TaskAssigneesUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    upsert?: Array<TaskAssigneesUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => TaskAssigneesCreateManyTaskInputEnvelope, {nullable:true})
    createMany?: TaskAssigneesCreateManyTaskInputEnvelope;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    set?: Array<TaskAssigneesWhereUniqueInput>;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    disconnect?: Array<TaskAssigneesWhereUniqueInput>;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    delete?: Array<TaskAssigneesWhereUniqueInput>;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    connect?: Array<TaskAssigneesWhereUniqueInput>;

    @Field(() => [TaskAssigneesUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    update?: Array<TaskAssigneesUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [TaskAssigneesUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    updateMany?: Array<TaskAssigneesUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [TaskAssigneesScalarWhereInput], {nullable:true})
    deleteMany?: Array<TaskAssigneesScalarWhereInput>;
}
