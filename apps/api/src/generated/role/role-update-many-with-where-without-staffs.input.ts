import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleScalarWhereInput } from './role-scalar-where.input';
import { RoleUpdateManyMutationInput } from './role-update-many-mutation.input';

@InputType()
export class RoleUpdateManyWithWhereWithoutStaffsInput {

    @Field(() => RoleScalarWhereInput, {nullable:false})
    where!: RoleScalarWhereInput;

    @Field(() => RoleUpdateManyMutationInput, {nullable:false})
    data!: RoleUpdateManyMutationInput;
}
