import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskAssigneesUncheckedCreateNestedManyWithoutStaffInput } from '../task-assignees/task-assignees-unchecked-create-nested-many-without-staff.input';

@InputType()
export class StaffUncheckedCreateWithoutManagedTasksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:true})
    directorDayId?: number;

    @Field(() => TaskAssigneesUncheckedCreateNestedManyWithoutStaffInput, {nullable:true})
    assignedTasks?: TaskAssigneesUncheckedCreateNestedManyWithoutStaffInput;
}
