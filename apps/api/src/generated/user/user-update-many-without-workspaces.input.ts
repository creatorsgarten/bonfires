import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkspacesInput } from './user-create-without-workspaces.input';
import { UserCreateOrConnectWithoutWorkspacesInput } from './user-create-or-connect-without-workspaces.input';
import { UserUpsertWithWhereUniqueWithoutWorkspacesInput } from './user-upsert-with-where-unique-without-workspaces.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutWorkspacesInput } from './user-update-with-where-unique-without-workspaces.input';
import { UserUpdateManyWithWhereWithoutWorkspacesInput } from './user-update-many-with-where-without-workspaces.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutWorkspacesInput {

    @Field(() => [UserCreateWithoutWorkspacesInput], {nullable:true})
    create?: Array<UserCreateWithoutWorkspacesInput>;

    @Field(() => [UserCreateOrConnectWithoutWorkspacesInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutWorkspacesInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutWorkspacesInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutWorkspacesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutWorkspacesInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutWorkspacesInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutWorkspacesInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutWorkspacesInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
