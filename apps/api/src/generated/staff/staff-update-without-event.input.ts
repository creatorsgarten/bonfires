import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateManyWithoutStaffsInput } from '../role/role-update-many-without-staffs.input';
import { UserUpdateOneRequiredWithoutStaffsInput } from '../user/user-update-one-required-without-staffs.input';
import { TaskUpdateManyWithoutManagerInput } from '../task/task-update-many-without-manager.input';
import { TaskAssigneesUpdateManyWithoutStaffInput } from '../task-assignees/task-assignees-update-many-without-staff.input';
import { DayUpdateOneWithoutDirectorsInput } from '../day/day-update-one-without-directors.input';

@InputType()
export class StaffUpdateWithoutEventInput {

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => RoleUpdateManyWithoutStaffsInput, {nullable:true})
    roles?: RoleUpdateManyWithoutStaffsInput;

    @Field(() => UserUpdateOneRequiredWithoutStaffsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutStaffsInput;

    @Field(() => TaskUpdateManyWithoutManagerInput, {nullable:true})
    managedTasks?: TaskUpdateManyWithoutManagerInput;

    @Field(() => TaskAssigneesUpdateManyWithoutStaffInput, {nullable:true})
    assignedTasks?: TaskAssigneesUpdateManyWithoutStaffInput;

    @Field(() => DayUpdateOneWithoutDirectorsInput, {nullable:true})
    directorDay?: DayUpdateOneWithoutDirectorsInput;
}
