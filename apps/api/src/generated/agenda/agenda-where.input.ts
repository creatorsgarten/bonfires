import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DayRelationFilter } from '../day/day-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class AgendaWhereInput {

    @Field(() => [AgendaWhereInput], {nullable:true})
    AND?: Array<AgendaWhereInput>;

    @Field(() => [AgendaWhereInput], {nullable:true})
    OR?: Array<AgendaWhereInput>;

    @Field(() => [AgendaWhereInput], {nullable:true})
    NOT?: Array<AgendaWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    startSlot?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    endSlot?: IntFilter;

    @Field(() => DayRelationFilter, {nullable:true})
    day?: DayRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    dayId?: IntNullableFilter;
}
