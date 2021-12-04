import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffCreateNestedManyWithoutUserInput } from '../staff/staff-create-nested-many-without-user.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutWorkspacesInput {

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

    @Field(() => StaffCreateNestedManyWithoutUserInput, {nullable:true})
    staffs?: StaffCreateNestedManyWithoutUserInput;

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;
}
