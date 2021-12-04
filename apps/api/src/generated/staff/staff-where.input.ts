import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { RoleListRelationFilter } from '../role/role-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';
import { TaskAssigneesListRelationFilter } from '../task-assignees/task-assignees-list-relation-filter.input';
import { DayRelationFilter } from '../day/day-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class StaffWhereInput {

    @Field(() => [StaffWhereInput], {nullable:true})
    AND?: Array<StaffWhereInput>;

    @Field(() => [StaffWhereInput], {nullable:true})
    OR?: Array<StaffWhereInput>;

    @Field(() => [StaffWhereInput], {nullable:true})
    NOT?: Array<StaffWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    displayName?: StringNullableFilter;

    @Field(() => RoleListRelationFilter, {nullable:true})
    roles?: RoleListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    event?: EventRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    eventId?: IntFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    managedTasks?: TaskListRelationFilter;

    @Field(() => TaskAssigneesListRelationFilter, {nullable:true})
    assignedTasks?: TaskAssigneesListRelationFilter;

    @Field(() => DayRelationFilter, {nullable:true})
    directorDay?: DayRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    directorDayId?: IntNullableFilter;
}
