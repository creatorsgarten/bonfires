import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class AgendaScalarWhereWithAggregatesInput {

    @Field(() => [AgendaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AgendaScalarWhereWithAggregatesInput>;

    @Field(() => [AgendaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AgendaScalarWhereWithAggregatesInput>;

    @Field(() => [AgendaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AgendaScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    startSlot?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    endSlot?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    dayId?: IntNullableWithAggregatesFilter;
}
