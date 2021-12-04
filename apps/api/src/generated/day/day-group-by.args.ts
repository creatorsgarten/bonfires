import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayWhereInput } from './day-where.input';
import { DayOrderByWithAggregationInput } from './day-order-by-with-aggregation.input';
import { DayScalarFieldEnum } from './day-scalar-field.enum';
import { DayScalarWhereWithAggregatesInput } from './day-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DayCountAggregateInput } from './day-count-aggregate.input';
import { DayAvgAggregateInput } from './day-avg-aggregate.input';
import { DaySumAggregateInput } from './day-sum-aggregate.input';
import { DayMinAggregateInput } from './day-min-aggregate.input';
import { DayMaxAggregateInput } from './day-max-aggregate.input';

@ArgsType()
export class DayGroupByArgs {

    @Field(() => DayWhereInput, {nullable:true})
    where?: DayWhereInput;

    @Field(() => [DayOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DayOrderByWithAggregationInput>;

    @Field(() => [DayScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DayScalarFieldEnum>;

    @Field(() => DayScalarWhereWithAggregatesInput, {nullable:true})
    having?: DayScalarWhereWithAggregatesInput;

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
