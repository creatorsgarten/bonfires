import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutManagedTasksInput } from './staff-create-without-managed-tasks.input';
import { StaffCreateOrConnectWithoutManagedTasksInput } from './staff-create-or-connect-without-managed-tasks.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@InputType()
export class StaffCreateNestedOneWithoutManagedTasksInput {

    @Field(() => StaffCreateWithoutManagedTasksInput, {nullable:true})
    create?: StaffCreateWithoutManagedTasksInput;

    @Field(() => StaffCreateOrConnectWithoutManagedTasksInput, {nullable:true})
    connectOrCreate?: StaffCreateOrConnectWithoutManagedTasksInput;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    connect?: StaffWhereUniqueInput;
}
