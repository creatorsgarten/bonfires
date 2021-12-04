import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutManagedTasksInput } from './staff-create-without-managed-tasks.input';
import { StaffCreateOrConnectWithoutManagedTasksInput } from './staff-create-or-connect-without-managed-tasks.input';
import { StaffUpsertWithoutManagedTasksInput } from './staff-upsert-without-managed-tasks.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutManagedTasksInput } from './staff-update-without-managed-tasks.input';

@InputType()
export class StaffUpdateOneWithoutManagedTasksInput {

    @Field(() => StaffCreateWithoutManagedTasksInput, {nullable:true})
    create?: StaffCreateWithoutManagedTasksInput;

    @Field(() => StaffCreateOrConnectWithoutManagedTasksInput, {nullable:true})
    connectOrCreate?: StaffCreateOrConnectWithoutManagedTasksInput;

    @Field(() => StaffUpsertWithoutManagedTasksInput, {nullable:true})
    upsert?: StaffUpsertWithoutManagedTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    connect?: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutManagedTasksInput, {nullable:true})
    update?: StaffUpdateWithoutManagedTasksInput;
}
