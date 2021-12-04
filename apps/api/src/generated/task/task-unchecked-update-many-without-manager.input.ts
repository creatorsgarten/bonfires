import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutManagerInput } from './task-create-without-manager.input';
import { TaskCreateOrConnectWithoutManagerInput } from './task-create-or-connect-without-manager.input';
import { TaskUpsertWithWhereUniqueWithoutManagerInput } from './task-upsert-with-where-unique-without-manager.input';
import { TaskCreateManyManagerInputEnvelope } from './task-create-many-manager-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutManagerInput } from './task-update-with-where-unique-without-manager.input';
import { TaskUpdateManyWithWhereWithoutManagerInput } from './task-update-many-with-where-without-manager.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutManagerInput {

    @Field(() => [TaskCreateWithoutManagerInput], {nullable:true})
    create?: Array<TaskCreateWithoutManagerInput>;

    @Field(() => [TaskCreateOrConnectWithoutManagerInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutManagerInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutManagerInput], {nullable:true})
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutManagerInput>;

    @Field(() => TaskCreateManyManagerInputEnvelope, {nullable:true})
    createMany?: TaskCreateManyManagerInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutManagerInput], {nullable:true})
    update?: Array<TaskUpdateWithWhereUniqueWithoutManagerInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutManagerInput], {nullable:true})
    updateMany?: Array<TaskUpdateManyWithWhereWithoutManagerInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<TaskScalarWhereInput>;
}
