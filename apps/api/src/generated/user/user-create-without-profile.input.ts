import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WorkspaceCreateNestedManyWithoutUsersInput } from '../workspace/workspace-create-nested-many-without-users.input';
import { StaffCreateNestedManyWithoutUserInput } from '../staff/staff-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutProfileInput {

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

    @Field(() => StaffCreateNestedManyWithoutUserInput, {nullable:true})
    staffs?: StaffCreateNestedManyWithoutUserInput;
}
