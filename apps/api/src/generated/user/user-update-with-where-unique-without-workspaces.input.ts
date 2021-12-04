import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWorkspacesInput } from './user-update-without-workspaces.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutWorkspacesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWorkspacesInput, {nullable:false})
    data!: UserUpdateWithoutWorkspacesInput;
}
