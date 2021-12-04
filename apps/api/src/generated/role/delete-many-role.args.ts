import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';

@ArgsType()
export class DeleteManyRoleArgs {

    @Field(() => RoleWhereInput, {nullable:true})
    where?: RoleWhereInput;
}
