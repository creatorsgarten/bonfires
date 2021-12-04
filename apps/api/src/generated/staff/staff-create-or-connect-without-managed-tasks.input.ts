import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffCreateWithoutManagedTasksInput } from './staff-create-without-managed-tasks.input';

@InputType()
export class StaffCreateOrConnectWithoutManagedTasksInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateWithoutManagedTasksInput, {nullable:false})
    create!: StaffCreateWithoutManagedTasksInput;
}
