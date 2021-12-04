import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { WorkspaceListRelationFilter } from '../workspace/workspace-list-relation-filter.input';
import { StaffListRelationFilter } from '../staff/staff-list-relation-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    displayName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    photo?: StringNullableFilter;

    @Field(() => WorkspaceListRelationFilter, {nullable:true})
    workspaces?: WorkspaceListRelationFilter;

    @Field(() => StaffListRelationFilter, {nullable:true})
    staffs?: StaffListRelationFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    profileId?: IntNullableFilter;
}
