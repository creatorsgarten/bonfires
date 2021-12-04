import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class AgendaScalarWhereInput {

    @Field(() => [AgendaScalarWhereInput], {nullable:true})
    AND?: Array<AgendaScalarWhereInput>;

    @Field(() => [AgendaScalarWhereInput], {nullable:true})
    OR?: Array<AgendaScalarWhereInput>;

    @Field(() => [AgendaScalarWhereInput], {nullable:true})
    NOT?: Array<AgendaScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    startSlot?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    endSlot?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    dayId?: IntNullableFilter;
}
