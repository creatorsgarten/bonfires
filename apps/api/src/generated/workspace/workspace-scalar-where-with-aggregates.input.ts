import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class WorkspaceScalarWhereWithAggregatesInput {

    @Field(() => [WorkspaceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkspaceScalarWhereWithAggregatesInput>;

    @Field(() => [WorkspaceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkspaceScalarWhereWithAggregatesInput>;

    @Field(() => [WorkspaceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkspaceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;
}
