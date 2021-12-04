import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffCreateWithoutAssignedTasksInput } from './staff-create-without-assigned-tasks.input';

@InputType()
export class StaffCreateOrConnectWithoutAssignedTasksInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateWithoutAssignedTasksInput, {nullable:false})
    create!: StaffCreateWithoutAssignedTasksInput;
}
