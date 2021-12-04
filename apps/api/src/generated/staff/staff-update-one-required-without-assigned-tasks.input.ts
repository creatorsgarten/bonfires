import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutAssignedTasksInput } from './staff-create-without-assigned-tasks.input';
import { StaffCreateOrConnectWithoutAssignedTasksInput } from './staff-create-or-connect-without-assigned-tasks.input';
import { StaffUpsertWithoutAssignedTasksInput } from './staff-upsert-without-assigned-tasks.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutAssignedTasksInput } from './staff-update-without-assigned-tasks.input';

@InputType()
export class StaffUpdateOneRequiredWithoutAssignedTasksInput {

    @Field(() => StaffCreateWithoutAssignedTasksInput, {nullable:true})
    create?: StaffCreateWithoutAssignedTasksInput;

    @Field(() => StaffCreateOrConnectWithoutAssignedTasksInput, {nullable:true})
    connectOrCreate?: StaffCreateOrConnectWithoutAssignedTasksInput;

    @Field(() => StaffUpsertWithoutAssignedTasksInput, {nullable:true})
    upsert?: StaffUpsertWithoutAssignedTasksInput;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    connect?: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutAssignedTasksInput, {nullable:true})
    update?: StaffUpdateWithoutAssignedTasksInput;
}
