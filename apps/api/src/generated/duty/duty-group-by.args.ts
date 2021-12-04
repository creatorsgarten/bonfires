import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyWhereInput } from './duty-where.input';
import { DutyOrderByWithAggregationInput } from './duty-order-by-with-aggregation.input';
import { DutyScalarFieldEnum } from './duty-scalar-field.enum';
import { DutyScalarWhereWithAggregatesInput } from './duty-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DutyCountAggregateInput } from './duty-count-aggregate.input';
import { DutyAvgAggregateInput } from './duty-avg-aggregate.input';
import { DutySumAggregateInput } from './duty-sum-aggregate.input';
import { DutyMinAggregateInput } from './duty-min-aggregate.input';
import { DutyMaxAggregateInput } from './duty-max-aggregate.input';

@ArgsType()
export class DutyGroupByArgs {

    @Field(() => DutyWhereInput, {nullable:true})
    where?: DutyWhereInput;

    @Field(() => [DutyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DutyOrderByWithAggregationInput>;

    @Field(() => [DutyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DutyScalarFieldEnum>;

    @Field(() => DutyScalarWhereWithAggregatesInput, {nullable:true})
    having?: DutyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DutyCountAggregateInput, {nullable:true})
    _count?: DutyCountAggregateInput;

    @Field(() => DutyAvgAggregateInput, {nullable:true})
    _avg?: DutyAvgAggregateInput;

    @Field(() => DutySumAggregateInput, {nullable:true})
    _sum?: DutySumAggregateInput;

    @Field(() => DutyMinAggregateInput, {nullable:true})
    _min?: DutyMinAggregateInput;

    @Field(() => DutyMaxAggregateInput, {nullable:true})
    _max?: DutyMaxAggregateInput;
}
