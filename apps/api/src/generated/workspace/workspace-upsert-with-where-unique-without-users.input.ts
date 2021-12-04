import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceUpdateWithoutUsersInput } from './workspace-update-without-users.input';
import { WorkspaceCreateWithoutUsersInput } from './workspace-create-without-users.input';

@InputType()
export class WorkspaceUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    where!: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceUpdateWithoutUsersInput, {nullable:false})
    update!: WorkspaceUpdateWithoutUsersInput;

    @Field(() => WorkspaceCreateWithoutUsersInput, {nullable:false})
    create!: WorkspaceCreateWithoutUsersInput;
}
