import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUpdateManyWithoutUserInput } from '../staff/staff-update-many-without-user.input';
import { ProfileUpdateOneWithoutUserInput } from '../profile/profile-update-one-without-user.input';

@InputType()
export class UserUpdateWithoutWorkspacesInput {

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

    @Field(() => StaffUpdateManyWithoutUserInput, {nullable:true})
    staffs?: StaffUpdateManyWithoutUserInput;

    @Field(() => ProfileUpdateOneWithoutUserInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutUserInput;
}
