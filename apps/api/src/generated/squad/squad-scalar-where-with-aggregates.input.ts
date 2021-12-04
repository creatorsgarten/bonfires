import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SquadScalarWhereWithAggregatesInput {

    @Field(() => [SquadScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SquadScalarWhereWithAggregatesInput>;

    @Field(() => [SquadScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SquadScalarWhereWithAggregatesInput>;

    @Field(() => [SquadScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SquadScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;
}
