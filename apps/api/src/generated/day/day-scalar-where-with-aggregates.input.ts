import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DayScalarWhereWithAggregatesInput {

    @Field(() => [DayScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DayScalarWhereWithAggregatesInput>;

    @Field(() => [DayScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DayScalarWhereWithAggregatesInput>;

    @Field(() => [DayScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DayScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startsAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventId?: IntWithAggregatesFilter;
}
