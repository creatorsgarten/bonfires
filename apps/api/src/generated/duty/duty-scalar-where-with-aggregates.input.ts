import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DutyScalarWhereWithAggregatesInput {

    @Field(() => [DutyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DutyScalarWhereWithAggregatesInput>;

    @Field(() => [DutyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DutyScalarWhereWithAggregatesInput>;

    @Field(() => [DutyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DutyScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    dayId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    startSlot?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    endSlot?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    squadId?: IntWithAggregatesFilter;
}
