import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from './role-type.enum';
import { NestedEnumRoleTypeWithAggregatesFilter } from './nested-enum-role-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRoleTypeFilter } from './nested-enum-role-type-filter.input';

@InputType()
export class EnumRoleTypeWithAggregatesFilter {

    @Field(() => RoleType, {nullable:true})
    equals?: keyof typeof RoleType;

    @Field(() => [RoleType], {nullable:true})
    in?: Array<keyof typeof RoleType>;

    @Field(() => [RoleType], {nullable:true})
    notIn?: Array<keyof typeof RoleType>;

    @Field(() => NestedEnumRoleTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRoleTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRoleTypeFilter, {nullable:true})
    _min?: NestedEnumRoleTypeFilter;

    @Field(() => NestedEnumRoleTypeFilter, {nullable:true})
    _max?: NestedEnumRoleTypeFilter;
}
