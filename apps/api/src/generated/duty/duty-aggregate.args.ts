import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyWhereInput } from './duty-where.input';
import { DutyOrderByWithRelationInput } from './duty-order-by-with-relation.input';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DutyCountAggregateInput } from './duty-count-aggregate.input';
import { DutyAvgAggregateInput } from './duty-avg-aggregate.input';
import { DutySumAggregateInput } from './duty-sum-aggregate.input';
import { DutyMinAggregateInput } from './duty-min-aggregate.input';
import { DutyMaxAggregateInput } from './duty-max-aggregate.input';

@ArgsType()
export class DutyAggregateArgs {

    @Field(() => DutyWhereInput, {nullable:true})
    where?: DutyWhereInput;

    @Field(() => [DutyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DutyOrderByWithRelationInput>;

    @Field(() => DutyWhereUniqueInput, {nullable:true})
    cursor?: DutyWhereUniqueInput;

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
