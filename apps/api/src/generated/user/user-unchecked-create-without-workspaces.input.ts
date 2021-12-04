import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUncheckedCreateNestedManyWithoutUserInput } from '../staff/staff-unchecked-create-nested-many-without-user.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutWorkspacesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:true})
    photo?: string;

    @Field(() => Int, {nullable:true})
    profileId?: number;

    @Field(() => StaffUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    staffs?: StaffUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
}
