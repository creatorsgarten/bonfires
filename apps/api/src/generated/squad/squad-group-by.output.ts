import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SquadCountAggregate } from './squad-count-aggregate.output';
import { SquadAvgAggregate } from './squad-avg-aggregate.output';
import { SquadSumAggregate } from './squad-sum-aggregate.output';
import { SquadMinAggregate } from './squad-min-aggregate.output';
import { SquadMaxAggregate } from './squad-max-aggregate.output';

@ObjectType()
export class SquadGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => SquadCountAggregate, {nullable:true})
    _count?: SquadCountAggregate;

    @Field(() => SquadAvgAggregate, {nullable:true})
    _avg?: SquadAvgAggregate;

    @Field(() => SquadSumAggregate, {nullable:true})
    _sum?: SquadSumAggregate;

    @Field(() => SquadMinAggregate, {nullable:true})
    _min?: SquadMinAggregate;

    @Field(() => SquadMaxAggregate, {nullable:true})
    _max?: SquadMaxAggregate;
}
