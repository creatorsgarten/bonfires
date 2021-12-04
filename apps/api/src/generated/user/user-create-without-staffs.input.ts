import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkspaceCreateNestedManyWithoutUsersInput } from '../workspace/workspace-create-nested-many-without-users.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutStaffsInput {

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

    @Field(() => WorkspaceCreateNestedManyWithoutUsersInput, {nullable:true})
    workspaces?: WorkspaceCreateNestedManyWithoutUsersInput;

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;
}
