import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class TaskAssigneesScalarWhereWithAggregatesInput {

    @Field(() => [TaskAssigneesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TaskAssigneesScalarWhereWithAggregatesInput>;

    @Field(() => [TaskAssigneesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TaskAssigneesScalarWhereWithAggregatesInput>;

    @Field(() => [TaskAssigneesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TaskAssigneesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    taskId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    staffId?: IntWithAggregatesFilter;
}
