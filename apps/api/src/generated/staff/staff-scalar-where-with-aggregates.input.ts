import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class StaffScalarWhereWithAggregatesInput {

    @Field(() => [StaffScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StaffScalarWhereWithAggregatesInput>;

    @Field(() => [StaffScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StaffScalarWhereWithAggregatesInput>;

    @Field(() => [StaffScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StaffScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    displayName?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    directorDayId?: IntNullableWithAggregatesFilter;
}
