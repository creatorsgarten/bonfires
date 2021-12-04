import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadWhereInput } from './squad-where.input';
import { SquadOrderByWithAggregationInput } from './squad-order-by-with-aggregation.input';
import { SquadScalarFieldEnum } from './squad-scalar-field.enum';
import { SquadScalarWhereWithAggregatesInput } from './squad-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SquadCountAggregateInput } from './squad-count-aggregate.input';
import { SquadAvgAggregateInput } from './squad-avg-aggregate.input';
import { SquadSumAggregateInput } from './squad-sum-aggregate.input';
import { SquadMinAggregateInput } from './squad-min-aggregate.input';
import { SquadMaxAggregateInput } from './squad-max-aggregate.input';

@ArgsType()
export class SquadGroupByArgs {

    @Field(() => SquadWhereInput, {nullable:true})
    where?: SquadWhereInput;

    @Field(() => [SquadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SquadOrderByWithAggregationInput>;

    @Field(() => [SquadScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SquadScalarFieldEnum>;

    @Field(() => SquadScalarWhereWithAggregatesInput, {nullable:true})
    having?: SquadScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SquadCountAggregateInput, {nullable:true})
    _count?: SquadCountAggregateInput;

    @Field(() => SquadAvgAggregateInput, {nullable:true})
    _avg?: SquadAvgAggregateInput;

    @Field(() => SquadSumAggregateInput, {nullable:true})
    _sum?: SquadSumAggregateInput;

    @Field(() => SquadMinAggregateInput, {nullable:true})
    _min?: SquadMinAggregateInput;

    @Field(() => SquadMaxAggregateInput, {nullable:true})
    _max?: SquadMaxAggregateInput;
}
