import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceWhereInput } from './workspace-where.input';

@ArgsType()
export class DeleteManyWorkspaceArgs {

    @Field(() => WorkspaceWhereInput, {nullable:true})
    where?: WorkspaceWhereInput;
}
