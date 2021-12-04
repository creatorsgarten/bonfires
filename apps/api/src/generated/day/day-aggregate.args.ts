import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayWhereInput } from './day-where.input';
import { DayOrderByWithRelationInput } from './day-order-by-with-relation.input';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DayCountAggregateInput } from './day-count-aggregate.input';
import { DayAvgAggregateInput } from './day-avg-aggregate.input';
import { DaySumAggregateInput } from './day-sum-aggregate.input';
import { DayMinAggregateInput } from './day-min-aggregate.input';
import { DayMaxAggregateInput } from './day-max-aggregate.input';

@ArgsType()
export class DayAggregateArgs {

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

    @Field(() => DayCountAggregateInput, {nullable:true})
    _count?: DayCountAggregateInput;

    @Field(() => DayAvgAggregateInput, {nullable:true})
    _avg?: DayAvgAggregateInput;

    @Field(() => DaySumAggregateInput, {nullable:true})
    _sum?: DaySumAggregateInput;

    @Field(() => DayMinAggregateInput, {nullable:true})
    _min?: DayMinAggregateInput;

    @Field(() => DayMaxAggregateInput, {nullable:true})
    _max?: DayMaxAggregateInput;
}
