import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceUpdateInput } from './workspace-update.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';

@ArgsType()
export class UpdateOneWorkspaceArgs {

    @Field(() => WorkspaceUpdateInput, {nullable:false})
    data!: WorkspaceUpdateInput;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    where!: WorkspaceWhereUniqueInput;
}
