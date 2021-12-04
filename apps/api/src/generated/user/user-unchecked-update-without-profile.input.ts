import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUncheckedUpdateManyWithoutUserInput } from '../staff/staff-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutProfileInput {

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
}
