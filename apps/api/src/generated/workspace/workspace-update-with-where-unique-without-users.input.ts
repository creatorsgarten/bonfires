import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceUpdateWithoutUsersInput } from './workspace-update-without-users.input';

@InputType()
export class WorkspaceUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    where!: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceUpdateWithoutUsersInput, {nullable:false})
    data!: WorkspaceUpdateWithoutUsersInput;
}
