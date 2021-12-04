import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceCreateWithoutUsersInput } from './workspace-create-without-users.input';

@InputType()
export class WorkspaceCreateOrConnectWithoutUsersInput {

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    where!: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceCreateWithoutUsersInput, {nullable:false})
    create!: WorkspaceCreateWithoutUsersInput;
}
