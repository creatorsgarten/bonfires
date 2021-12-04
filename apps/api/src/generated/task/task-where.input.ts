import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { SquadRelationFilter } from '../squad/squad-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StaffRelationFilter } from '../staff/staff-relation-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { TaskAssigneesListRelationFilter } from '../task-assignees/task-assignees-list-relation-filter.input';
import { DutyRelationFilter } from '../duty/duty-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TaskWhereInput {

    @Field(() => [TaskWhereInput], {nullable:true})
    AND?: Array<TaskWhereInput>;

    @Field(() => [TaskWhereInput], {nullable:true})
    OR?: Array<TaskWhereInput>;

    @Field(() => [TaskWhereInput], {nullable:true})
    NOT?: Array<TaskWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => SquadRelationFilter, {nullable:true})
    squad?: SquadRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    squadId?: IntNullableFilter;

    @Field(() => StaffRelationFilter, {nullable:true})
    manager?: StaffRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    managerId?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dueDate?: DateTimeNullableFilter;

    @Field(() => TaskAssigneesListRelationFilter, {nullable:true})
    assignees?: TaskAssigneesListRelationFilter;

    @Field(() => DutyRelationFilter, {nullable:true})
    duty?: DutyRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    dutyId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
