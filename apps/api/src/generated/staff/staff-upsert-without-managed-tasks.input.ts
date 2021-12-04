import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateWithoutManagedTasksInput } from './staff-update-without-managed-tasks.input';
import { StaffCreateWithoutManagedTasksInput } from './staff-create-without-managed-tasks.input';

@InputType()
export class StaffUpsertWithoutManagedTasksInput {

    @Field(() => StaffUpdateWithoutManagedTasksInput, {nullable:false})
    update!: StaffUpdateWithoutManagedTasksInput;

    @Field(() => StaffCreateWithoutManagedTasksInput, {nullable:false})
    create!: StaffCreateWithoutManagedTasksInput;
}
