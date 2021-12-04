import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@ArgsType()
export class DeleteOneRoleArgs {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;
}
