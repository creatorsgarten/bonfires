import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateWithoutStaffsInput } from './role-create-without-staffs.input';

@InputType()
export class RoleCreateOrConnectWithoutStaffsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutStaffsInput, {nullable:false})
    create!: RoleCreateWithoutStaffsInput;
}
