import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';

@ArgsType()
export class FindUniqueWorkspaceArgs {

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    where!: WorkspaceWhereUniqueInput;
}
