import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedManyWithoutStaffsInput } from '../role/role-create-nested-many-without-staffs.input';
import { EventCreateNestedOneWithoutStaffsInput } from '../event/event-create-nested-one-without-staffs.input';
import { TaskCreateNestedManyWithoutManagerInput } from '../task/task-create-nested-many-without-manager.input';
import { TaskAssigneesCreateNestedManyWithoutStaffInput } from '../task-assignees/task-assignees-create-nested-many-without-staff.input';
import { DayCreateNestedOneWithoutDirectorsInput } from '../day/day-create-nested-one-without-directors.input';

@InputType()
export class StaffCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => RoleCreateNestedManyWithoutStaffsInput, {nullable:true})
    roles?: RoleCreateNestedManyWithoutStaffsInput;

    @Field(() => EventCreateNestedOneWithoutStaffsInput, {nullable:false})
    event!: EventCreateNestedOneWithoutStaffsInput;

    @Field(() => TaskCreateNestedManyWithoutManagerInput, {nullable:true})
    managedTasks?: TaskCreateNestedManyWithoutManagerInput;

    @Field(() => TaskAssigneesCreateNestedManyWithoutStaffInput, {nullable:true})
    assignedTasks?: TaskAssigneesCreateNestedManyWithoutStaffInput;

    @Field(() => DayCreateNestedOneWithoutDirectorsInput, {nullable:true})
    directorDay?: DayCreateNestedOneWithoutDirectorsInput;
}
