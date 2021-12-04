import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceWhereInput } from './workspace-where.input';
import { WorkspaceOrderByWithRelationInput } from './workspace-order-by-with-relation.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkspaceScalarFieldEnum } from './workspace-scalar-field.enum';

@ArgsType()
export class FindManyWorkspaceArgs {

    @Field(() => WorkspaceWhereInput, {nullable:true})
    where?: WorkspaceWhereInput;

    @Field(() => [WorkspaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkspaceOrderByWithRelationInput>;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:true})
    cursor?: WorkspaceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkspaceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkspaceScalarFieldEnum>;
}
