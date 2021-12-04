import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DutyScalarWhereInput {

    @Field(() => [DutyScalarWhereInput], {nullable:true})
    AND?: Array<DutyScalarWhereInput>;

    @Field(() => [DutyScalarWhereInput], {nullable:true})
    OR?: Array<DutyScalarWhereInput>;

    @Field(() => [DutyScalarWhereInput], {nullable:true})
    NOT?: Array<DutyScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    dayId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    startSlot?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    endSlot?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    squadId?: IntFilter;
}
