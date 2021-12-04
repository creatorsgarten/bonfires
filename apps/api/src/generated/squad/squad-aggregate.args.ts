import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadWhereInput } from './squad-where.input';
import { SquadOrderByWithRelationInput } from './squad-order-by-with-relation.input';
import { SquadWhereUniqueInput } from './squad-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SquadCountAggregateInput } from './squad-count-aggregate.input';
import { SquadAvgAggregateInput } from './squad-avg-aggregate.input';
import { SquadSumAggregateInput } from './squad-sum-aggregate.input';
import { SquadMinAggregateInput } from './squad-min-aggregate.input';
import { SquadMaxAggregateInput } from './squad-max-aggregate.input';

@ArgsType()
export class SquadAggregateArgs {

    @Field(() => SquadWhereInput, {nullable:true})
    where?: SquadWhereInput;

    @Field(() => [SquadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SquadOrderByWithRelationInput>;

    @Field(() => SquadWhereUniqueInput, {nullable:true})
    cursor?: SquadWhereUniqueInput;

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
