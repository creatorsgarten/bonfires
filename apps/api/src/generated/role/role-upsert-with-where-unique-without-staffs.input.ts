import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutStaffsInput } from './role-update-without-staffs.input';
import { RoleCreateWithoutStaffsInput } from './role-create-without-staffs.input';

@InputType()
export class RoleUpsertWithWhereUniqueWithoutStaffsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutStaffsInput, {nullable:false})
    update!: RoleUpdateWithoutStaffsInput;

    @Field(() => RoleCreateWithoutStaffsInput, {nullable:false})
    create!: RoleCreateWithoutStaffsInput;
}
