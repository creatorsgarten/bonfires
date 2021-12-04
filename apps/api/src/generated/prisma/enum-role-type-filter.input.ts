import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from './role-type.enum';
import { NestedEnumRoleTypeFilter } from './nested-enum-role-type-filter.input';

@InputType()
export class EnumRoleTypeFilter {

    @Field(() => RoleType, {nullable:true})
    equals?: keyof typeof RoleType;

    @Field(() => [RoleType], {nullable:true})
    in?: Array<keyof typeof RoleType>;

    @Field(() => [RoleType], {nullable:true})
    notIn?: Array<keyof typeof RoleType>;

    @Field(() => NestedEnumRoleTypeFilter, {nullable:true})
    not?: NestedEnumRoleTypeFilter;
}
