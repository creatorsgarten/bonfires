import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskAssigneesUncheckedUpdateManyWithoutStaffInput } from '../task-assignees/task-assignees-unchecked-update-many-without-staff.input';

@InputType()
export class StaffUncheckedUpdateWithoutManagedTasksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventId?: number;

    @Field(() => Int, {nullable:true})
    directorDayId?: number;

    @Field(() => TaskAssigneesUncheckedUpdateManyWithoutStaffInput, {nullable:true})
    assignedTasks?: TaskAssigneesUncheckedUpdateManyWithoutStaffInput;
}
