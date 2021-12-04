import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceScalarWhereInput } from './workspace-scalar-where.input';
import { WorkspaceUpdateManyMutationInput } from './workspace-update-many-mutation.input';

@InputType()
export class WorkspaceUpdateManyWithWhereWithoutUsersInput {

    @Field(() => WorkspaceScalarWhereInput, {nullable:false})
    where!: WorkspaceScalarWhereInput;

    @Field(() => WorkspaceUpdateManyMutationInput, {nullable:false})
    data!: WorkspaceUpdateManyMutationInput;
}
