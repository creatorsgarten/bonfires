import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumRoleTypeWithAggregatesFilter } from '../prisma/enum-role-type-with-aggregates-filter.input';

@InputType()
export class RoleScalarWhereWithAggregatesInput {

    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RoleScalarWhereWithAggregatesInput>;

    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RoleScalarWhereWithAggregatesInput>;

    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RoleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => EnumRoleTypeWithAggregatesFilter, {nullable:true})
    type?: EnumRoleTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    squadId?: IntWithAggregatesFilter;
}
