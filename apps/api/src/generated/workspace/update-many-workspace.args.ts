import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceUpdateManyMutationInput } from './workspace-update-many-mutation.input';
import { WorkspaceWhereInput } from './workspace-where.input';

@ArgsType()
export class UpdateManyWorkspaceArgs {

    @Field(() => WorkspaceUpdateManyMutationInput, {nullable:false})
    data!: WorkspaceUpdateManyMutationInput;

    @Field(() => WorkspaceWhereInput, {nullable:true})
    where?: WorkspaceWhereInput;
}
