import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceCreateInput } from './workspace-create.input';

@ArgsType()
export class CreateOneWorkspaceArgs {

    @Field(() => WorkspaceCreateInput, {nullable:false})
    data!: WorkspaceCreateInput;
}
