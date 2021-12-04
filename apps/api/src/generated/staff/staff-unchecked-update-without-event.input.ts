import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskUncheckedUpdateManyWithoutManagerInput } from '../task/task-unchecked-update-many-without-manager.input';
import { TaskAssigneesUncheckedUpdateManyWithoutStaffInput } from '../task-assignees/task-assignees-unchecked-update-many-without-staff.input';

@InputType()
export class StaffUncheckedUpdateWithoutEventInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    directorDayId?: number;

    @Field(() => TaskUncheckedUpdateManyWithoutManagerInput, {nullable:true})
    managedTasks?: TaskUncheckedUpdateManyWithoutManagerInput;

    @Field(() => TaskAssigneesUncheckedUpdateManyWithoutStaffInput, {nullable:true})
    assignedTasks?: TaskAssigneesUncheckedUpdateManyWithoutStaffInput;
}
