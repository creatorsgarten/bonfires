import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutUsersInput } from './workspace-create-without-users.input';
import { WorkspaceCreateOrConnectWithoutUsersInput } from './workspace-create-or-connect-without-users.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';

@InputType()
export class WorkspaceCreateNestedManyWithoutUsersInput {

    @Field(() => [WorkspaceCreateWithoutUsersInput], {nullable:true})
    create?: Array<WorkspaceCreateWithoutUsersInput>;

    @Field(() => [WorkspaceCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<WorkspaceCreateOrConnectWithoutUsersInput>;

    @Field(() => [WorkspaceWhereUniqueInput], {nullable:true})
    connect?: Array<WorkspaceWhereUniqueInput>;
}
