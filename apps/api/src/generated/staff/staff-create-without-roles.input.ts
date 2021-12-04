import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutStaffsInput } from '../user/user-create-nested-one-without-staffs.input';
import { EventCreateNestedOneWithoutStaffsInput } from '../event/event-create-nested-one-without-staffs.input';
import { TaskCreateNestedManyWithoutManagerInput } from '../task/task-create-nested-many-without-manager.input';
import { TaskAssigneesCreateNestedManyWithoutStaffInput } from '../task-assignees/task-assignees-create-nested-many-without-staff.input';
import { DayCreateNestedOneWithoutDirectorsInput } from '../day/day-create-nested-one-without-directors.input';

@InputType()
export class StaffCreateWithoutRolesInput {

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => UserCreateNestedOneWithoutStaffsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutStaffsInput;

    @Field(() => EventCreateNestedOneWithoutStaffsInput, {nullable:false})
    event!: EventCreateNestedOneWithoutStaffsInput;

    @Field(() => TaskCreateNestedManyWithoutManagerInput, {nullable:true})
    managedTasks?: TaskCreateNestedManyWithoutManagerInput;

    @Field(() => TaskAssigneesCreateNestedManyWithoutStaffInput, {nullable:true})
    assignedTasks?: TaskAssigneesCreateNestedManyWithoutStaffInput;

    @Field(() => DayCreateNestedOneWithoutDirectorsInput, {nullable:true})
    directorDay?: DayCreateNestedOneWithoutDirectorsInput;
}
