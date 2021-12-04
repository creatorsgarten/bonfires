import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedManyWithoutStaffsInput } from '../role/role-create-nested-many-without-staffs.input';
import { UserCreateNestedOneWithoutStaffsInput } from '../user/user-create-nested-one-without-staffs.input';
import { EventCreateNestedOneWithoutStaffsInput } from '../event/event-create-nested-one-without-staffs.input';
import { TaskCreateNestedManyWithoutManagerInput } from '../task/task-create-nested-many-without-manager.input';
import { DayCreateNestedOneWithoutDirectorsInput } from '../day/day-create-nested-one-without-directors.input';

@InputType()
export class StaffCreateWithoutAssignedTasksInput {

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => RoleCreateNestedManyWithoutStaffsInput, {nullable:true})
    roles?: RoleCreateNestedManyWithoutStaffsInput;

    @Field(() => UserCreateNestedOneWithoutStaffsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutStaffsInput;

    @Field(() => EventCreateNestedOneWithoutStaffsInput, {nullable:false})
    event!: EventCreateNestedOneWithoutStaffsInput;

    @Field(() => TaskCreateNestedManyWithoutManagerInput, {nullable:true})
    managedTasks?: TaskCreateNestedManyWithoutManagerInput;

    @Field(() => DayCreateNestedOneWithoutDirectorsInput, {nullable:true})
    directorDay?: DayCreateNestedOneWithoutDirectorsInput;
}
