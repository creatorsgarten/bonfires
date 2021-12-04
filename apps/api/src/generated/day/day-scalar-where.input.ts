import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DayScalarWhereInput {

    @Field(() => [DayScalarWhereInput], {nullable:true})
    AND?: Array<DayScalarWhereInput>;

    @Field(() => [DayScalarWhereInput], {nullable:true})
    OR?: Array<DayScalarWhereInput>;

    @Field(() => [DayScalarWhereInput], {nullable:true})
    NOT?: Array<DayScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startsAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    eventId?: IntFilter;
}
