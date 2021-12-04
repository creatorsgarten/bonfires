import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleUpdateInput } from './role-update.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@ArgsType()
export class UpdateOneRoleArgs {

    @Field(() => RoleUpdateInput, {nullable:false})
    data!: RoleUpdateInput;

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;
}
