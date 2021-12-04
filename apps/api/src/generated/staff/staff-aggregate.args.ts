import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffWhereInput } from './staff-where.input';
import { StaffOrderByWithRelationInput } from './staff-order-by-with-relation.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StaffCountAggregateInput } from './staff-count-aggregate.input';
import { StaffAvgAggregateInput } from './staff-avg-aggregate.input';
import { StaffSumAggregateInput } from './staff-sum-aggregate.input';
import { StaffMinAggregateInput } from './staff-min-aggregate.input';
import { StaffMaxAggregateInput } from './staff-max-aggregate.input';

@ArgsType()
export class StaffAggregateArgs {

    @Field(() => StaffWhereInput, {nullable:true})
    where?: StaffWhereInput;

    @Field(() => [StaffOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StaffOrderByWithRelationInput>;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    cursor?: StaffWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StaffCountAggregateInput, {nullable:true})
    _count?: StaffCountAggregateInput;

    @Field(() => StaffAvgAggregateInput, {nullable:true})
    _avg?: StaffAvgAggregateInput;

    @Field(() => StaffSumAggregateInput, {nullable:true})
    _sum?: StaffSumAggregateInput;

    @Field(() => StaffMinAggregateInput, {nullable:true})
    _min?: StaffMinAggregateInput;

    @Field(() => StaffMaxAggregateInput, {nullable:true})
    _max?: StaffMaxAggregateInput;
}
