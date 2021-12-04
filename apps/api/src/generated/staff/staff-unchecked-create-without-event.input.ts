import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedManyWithoutManagerInput } from '../task/task-unchecked-create-nested-many-without-manager.input';
import { TaskAssigneesUncheckedCreateNestedManyWithoutStaffInput } from '../task-assignees/task-assignees-unchecked-create-nested-many-without-staff.input';

@InputType()
export class StaffUncheckedCreateWithoutEventInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    directorDayId?: number;

    @Field(() => TaskUncheckedCreateNestedManyWithoutManagerInput, {nullable:true})
    managedTasks?: TaskUncheckedCreateNestedManyWithoutManagerInput;

    @Field(() => TaskAssigneesUncheckedCreateNestedManyWithoutStaffInput, {nullable:true})
    assignedTasks?: TaskAssigneesUncheckedCreateNestedManyWithoutStaffInput;
}
