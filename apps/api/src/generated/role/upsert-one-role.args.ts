import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateInput } from './role-create.input';
import { RoleUpdateInput } from './role-update.input';

@ArgsType()
export class UpsertOneRoleArgs {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateInput, {nullable:false})
    create!: RoleCreateInput;

    @Field(() => RoleUpdateInput, {nullable:false})
    update!: RoleUpdateInput;
}
