import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkspacesInput } from './user-create-without-workspaces.input';
import { UserCreateOrConnectWithoutWorkspacesInput } from './user-create-or-connect-without-workspaces.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutWorkspacesInput {

    @Field(() => [UserCreateWithoutWorkspacesInput], {nullable:true})
    create?: Array<UserCreateWithoutWorkspacesInput>;

    @Field(() => [UserCreateOrConnectWithoutWorkspacesInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutWorkspacesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
