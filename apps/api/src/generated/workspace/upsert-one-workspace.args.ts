import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceCreateInput } from './workspace-create.input';
import { WorkspaceUpdateInput } from './workspace-update.input';

@ArgsType()
export class UpsertOneWorkspaceArgs {

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    where!: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceCreateInput, {nullable:false})
    create!: WorkspaceCreateInput;

    @Field(() => WorkspaceUpdateInput, {nullable:false})
    update!: WorkspaceUpdateInput;
}
