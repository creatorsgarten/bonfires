import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutStaffsInput } from './role-update-without-staffs.input';

@InputType()
export class RoleUpdateWithWhereUniqueWithoutStaffsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutStaffsInput, {nullable:false})
    data!: RoleUpdateWithoutStaffsInput;
}
