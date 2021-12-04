import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceWhereInput } from './workspace-where.input';

@InputType()
export class WorkspaceListRelationFilter {

    @Field(() => WorkspaceWhereInput, {nullable:true})
    every?: WorkspaceWhereInput;

    @Field(() => WorkspaceWhereInput, {nullable:true})
    some?: WorkspaceWhereInput;

    @Field(() => WorkspaceWhereInput, {nullable:true})
    none?: WorkspaceWhereInput;
}
