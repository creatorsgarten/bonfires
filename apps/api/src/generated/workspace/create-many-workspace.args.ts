import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceCreateManyInput } from './workspace-create-many.input';

@ArgsType()
export class CreateManyWorkspaceArgs {

    @Field(() => [WorkspaceCreateManyInput], {nullable:false})
    data!: Array<WorkspaceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
