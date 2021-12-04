import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesCreateWithoutStaffInput } from './task-assignees-create-without-staff.input';
import { TaskAssigneesCreateOrConnectWithoutStaffInput } from './task-assignees-create-or-connect-without-staff.input';
import { TaskAssigneesCreateManyStaffInputEnvelope } from './task-assignees-create-many-staff-input-envelope.input';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';

@InputType()
export class TaskAssigneesCreateNestedManyWithoutStaffInput {

    @Field(() => [TaskAssigneesCreateWithoutStaffInput], {nullable:true})
    create?: Array<TaskAssigneesCreateWithoutStaffInput>;

    @Field(() => [TaskAssigneesCreateOrConnectWithoutStaffInput], {nullable:true})
    connectOrCreate?: Array<TaskAssigneesCreateOrConnectWithoutStaffInput>;

    @Field(() => TaskAssigneesCreateManyStaffInputEnvelope, {nullable:true})
    createMany?: TaskAssigneesCreateManyStaffInputEnvelope;

    @Field(() => [TaskAssigneesWhereUniqueInput], {nullable:true})
    connect?: Array<TaskAssigneesWhereUniqueInput>;
}
