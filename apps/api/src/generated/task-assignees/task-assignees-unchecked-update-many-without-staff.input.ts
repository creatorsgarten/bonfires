import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesCreateWithoutStaffInput } from './task-assignees-create-without-staff.input';
import { TaskAssigneesCreateOrConnectWithoutStaffInput } from './task-assignees-create-or-connect-without-staff.input';
import { TaskAssigneesUpsertWithWhereUniqueWithoutStaffInput } from './task-assignees-upsert-with-where-unique-without-staff.input';
import { TaskAssigneesCreateManyStaffInputEnvelope } from './task-assignees-create-many-staff-input-envelope.input';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { TaskAssigneesUpdateWithWhereUniqueWithoutStaffInput } from './task-assignees-update-with-where-unique-without-staff.input';
import { TaskAssigneesUpdateManyWithWhereWithoutStaffInput } from './task-assignees-update-many-with-where-without-staff.input';
import { TaskAssigneesScalarWhereInput } from './task-assignees-scalar-where.input';

@InputType()
export class TaskAssigneesUncheckedUpdateManyWithoutStaffInput {

    @Field(() => [TaskAssigneesCreateWithoutStaffInput], {nullable:true})
    create?: Array<TaskAssigneesCreateWithoutStaffInput>;

    @Field(() => [TaskAssigneesCreateOrConnectWithoutStaffInput], {nullable:true})
    connectOrCreate?: Array<TaskAssigneesCreateOrConnectWithoutStaffInput>;

    @Field(() => [TaskAssigneesUpsertWithWhereUniqueWithoutStaffInput], {nullable:true})
    upsert?: Array<TaskAssigneesUpsertWithWhereUniqueWithoutStaffInput>;

    @Field(() => TaskAssigneesCreateManyStaffInputEnvelope, {nullable:true})
    createMany?: TaskAssigneesCreateManyStaffInputEnvelope;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    set?: Array<TaskAssigneesWhereUniqueInput>;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    disconnect?: Array<TaskAssigneesWhereUniqueInput>;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    delete?: Array<TaskAssigneesWhereUniqueInput>;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    connect?: Array<TaskAssigneesWhereUniqueInput>;

    @Field(() => [TaskAssigneesUpdateWithWhereUniqueWithoutStaffInput], {nullable:true})
    update?: Array<TaskAssigneesUpdateWithWhereUniqueWithoutStaffInput>;

    @Field(() => [TaskAssigneesUpdateManyWithWhereWithoutStaffInput], {nullable:true})
    updateMany?: Array<TaskAssigneesUpdateManyWithWhereWithoutStaffInput>;

    @Field(() => [TaskAssigneesScalarWhereInput], {nullable:true})
    deleteMany?: Array<TaskAssigneesScalarWhereInput>;
}
