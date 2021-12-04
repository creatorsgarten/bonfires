import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutAssignedTasksInput } from './staff-create-without-assigned-tasks.input';
import { StaffCreateOrConnectWithoutAssignedTasksInput } from './staff-create-or-connect-without-assigned-tasks.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@InputType()
export class StaffCreateNestedOneWithoutAssignedTasksInput {

    @Field(() => StaffCreateWithoutAssignedTasksInput, {nullable:true})
    create?: StaffCreateWithoutAssignedTasksInput;

    @Field(() => StaffCreateOrConnectWithoutAssignedTasksInput, {nullable:true})
    connectOrCreate?: StaffCreateOrConnectWithoutAssignedTasksInput;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    connect?: StaffWhereUniqueInput;
}
