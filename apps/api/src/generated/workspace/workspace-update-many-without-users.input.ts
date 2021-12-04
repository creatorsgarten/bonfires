import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutUsersInput } from './workspace-create-without-users.input';
import { WorkspaceCreateOrConnectWithoutUsersInput } from './workspace-create-or-connect-without-users.input';
import { WorkspaceUpsertWithWhereUniqueWithoutUsersInput } from './workspace-upsert-with-where-unique-without-users.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceUpdateWithWhereUniqueWithoutUsersInput } from './workspace-update-with-where-unique-without-users.input';
import { WorkspaceUpdateManyWithWhereWithoutUsersInput } from './workspace-update-many-with-where-without-users.input';
import { WorkspaceScalarWhereInput } from './workspace-scalar-where.input';

@InputType()
export class WorkspaceUpdateManyWithoutUsersInput {

    @Field(() => [WorkspaceCreateWithoutUsersInput], {nullable:true})
    create?: Array<WorkspaceCreateWithoutUsersInput>;

    @Field(() => [WorkspaceCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<WorkspaceCreateOrConnectWithoutUsersInput>;

    @Field(() => [WorkspaceUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    upsert?: Array<WorkspaceUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [WorkspaceWhereUniqueInput], {nullable:true})
    set?: Array<WorkspaceWhereUniqueInput>;

    @Field(() => [WorkspaceWhereUniqueInput], {nullable:true})
    disconnect?: Array<WorkspaceWhereUniqueInput>;

    @Field(() => [WorkspaceWhereUniqueInput], {nullable:true})
    delete?: Array<WorkspaceWhereUniqueInput>;

    @Field(() => [WorkspaceWhereUniqueInput], {nullable:true})
    connect?: Array<WorkspaceWhereUniqueInput>;

    @Field(() => [WorkspaceUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    update?: Array<WorkspaceUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [WorkspaceUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    updateMany?: Array<WorkspaceUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [WorkspaceScalarWhereInput], {nullable:true})
    deleteMany?: Array<WorkspaceScalarWhereInput>;
}
