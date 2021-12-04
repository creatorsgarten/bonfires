import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleCreateInput } from './role-create.input';

@ArgsType()
export class CreateOneRoleArgs {

    @Field(() => RoleCreateInput, {nullable:false})
    data!: RoleCreateInput;
}
