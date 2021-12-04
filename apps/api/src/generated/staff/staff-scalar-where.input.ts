import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class StaffScalarWhereInput {

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    AND?: Array<StaffScalarWhereInput>;

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    OR?: Array<StaffScalarWhereInput>;

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    NOT?: Array<StaffScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    displayName?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    eventId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    directorDayId?: IntNullableFilter;
}
