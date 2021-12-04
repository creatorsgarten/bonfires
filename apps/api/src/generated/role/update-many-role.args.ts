import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleUpdateManyMutationInput } from './role-update-many-mutation.input';
import { RoleWhereInput } from './role-where.input';

@ArgsType()
export class UpdateManyRoleArgs {

    @Field(() => RoleUpdateManyMutationInput, {nullable:false})
    data!: RoleUpdateManyMutationInput;

    @Field(() => RoleWhereInput, {nullable:true})
    where?: RoleWhereInput;
}
