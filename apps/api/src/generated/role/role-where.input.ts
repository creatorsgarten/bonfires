import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleTypeFilter } from '../prisma/enum-role-type-filter.input';
import { StaffListRelationFilter } from '../staff/staff-list-relation-filter.input';
import { SquadRelationFilter } from '../squad/squad-relation-filter.input';

@InputType()
export class RoleWhereInput {

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => EnumRoleTypeFilter, {nullable:true})
    type?: EnumRoleTypeFilter;

    @Field(() => StaffListRelationFilter, {nullable:true})
    staffs?: StaffListRelationFilter;

    @Field(() => SquadRelationFilter, {nullable:true})
    squad?: SquadRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    squadId?: IntFilter;
}
