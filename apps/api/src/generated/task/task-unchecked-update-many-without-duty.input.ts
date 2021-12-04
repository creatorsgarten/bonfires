import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutDutyInput } from './task-create-without-duty.input';
import { TaskCreateOrConnectWithoutDutyInput } from './task-create-or-connect-without-duty.input';
import { TaskUpsertWithWhereUniqueWithoutDutyInput } from './task-upsert-with-where-unique-without-duty.input';
import { TaskCreateManyDutyInputEnvelope } from './task-create-many-duty-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutDutyInput } from './task-update-with-where-unique-without-duty.input';
import { TaskUpdateManyWithWhereWithoutDutyInput } from './task-update-many-with-where-without-duty.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutDutyInput {

    @Field(() => [TaskCreateWithoutDutyInput], {nullable:true})
    create?: Array<TaskCreateWithoutDutyInput>;

    @Field(() => [TaskCreateOrConnectWithoutDutyInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutDutyInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutDutyInput], {nullable:true})
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutDutyInput>;

    @Field(() => TaskCreateManyDutyInputEnvelope, {nullable:true})
    createMany?: TaskCreateManyDutyInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutDutyInput], {nullable:true})
    update?: Array<TaskUpdateWithWhereUniqueWithoutDutyInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutDutyInput], {nullable:true})
    updateMany?: Array<TaskUpdateManyWithWhereWithoutDutyInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<TaskScalarWhereInput>;
}
