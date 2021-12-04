import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWorkspacesInput } from './user-update-without-workspaces.input';
import { UserCreateWithoutWorkspacesInput } from './user-create-without-workspaces.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutWorkspacesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWorkspacesInput, {nullable:false})
    update!: UserUpdateWithoutWorkspacesInput;

    @Field(() => UserCreateWithoutWorkspacesInput, {nullable:false})
    create!: UserCreateWithoutWorkspacesInput;
}
