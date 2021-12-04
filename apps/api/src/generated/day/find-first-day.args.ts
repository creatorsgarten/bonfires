import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayWhereInput } from './day-where.input';
import { DayOrderByWithRelationInput } from './day-order-by-with-relation.input';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DayScalarFieldEnum } from './day-scalar-field.enum';

@ArgsType()
export class FindFirstDayArgs {

    @Field(() => DayWhereInput, {nullable:true})
    where?: DayWhereInput;

    @Field(() => [DayOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DayOrderByWithRelationInput>;

    @Field(() => DayWhereUniqueInput, {nullable:true})
    cursor?: DayWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DayScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DayScalarFieldEnum>;
}
