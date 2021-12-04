import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DayListRelationFilter } from '../day/day-list-relation-filter.input';
import { StaffListRelationFilter } from '../staff/staff-list-relation-filter.input';
import { WorkspaceRelationFilter } from '../workspace/workspace-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EventWhereInput {

    @Field(() => [EventWhereInput], {nullable:true})
    AND?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    OR?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    NOT?: Array<EventWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slug?: StringNullableFilter;

    @Field(() => DayListRelationFilter, {nullable:true})
    days?: DayListRelationFilter;

    @Field(() => StaffListRelationFilter, {nullable:true})
    staffs?: StaffListRelationFilter;

    @Field(() => WorkspaceRelationFilter, {nullable:true})
    workspace?: WorkspaceRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    workspaceId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
