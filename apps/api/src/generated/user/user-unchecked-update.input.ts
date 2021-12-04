import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUncheckedUpdateManyWithoutUserInput } from '../staff/staff-unchecked-update-many-without-user.input';
import { ProfileUncheckedUpdateOneWithoutUserInput } from '../profile/profile-unchecked-update-one-without-user.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    photo?: string;

    @Field(() => Int, {nullable:true})
    profileId?: number;

    @Field(() => StaffUncheckedUpdateManyWithoutUserInput, {nullable:true})
    staffs?: StaffUncheckedUpdateManyWithoutUserInput;

    @Field(() => ProfileUncheckedUpdateOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedUpdateOneWithoutUserInput;
}
