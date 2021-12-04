import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateWithoutAssignedTasksInput } from './staff-update-without-assigned-tasks.input';
import { StaffCreateWithoutAssignedTasksInput } from './staff-create-without-assigned-tasks.input';

@InputType()
export class StaffUpsertWithoutAssignedTasksInput {

    @Field(() => StaffUpdateWithoutAssignedTasksInput, {nullable:false})
    update!: StaffUpdateWithoutAssignedTasksInput;

    @Field(() => StaffCreateWithoutAssignedTasksInput, {nullable:false})
    create!: StaffCreateWithoutAssignedTasksInput;
}
