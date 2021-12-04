import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ProfileScalarWhereWithAggregatesInput {

    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProfileScalarWhereWithAggregatesInput>;

    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProfileScalarWhereWithAggregatesInput>;

    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProfileScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    firstName?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    lastName?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phone?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    homeAddress?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    lineId?: StringNullableWithAggregatesFilter;
}
