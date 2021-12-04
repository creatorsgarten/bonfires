import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DayCountAggregate } from './day-count-aggregate.output';
import { DayAvgAggregate } from './day-avg-aggregate.output';
import { DaySumAggregate } from './day-sum-aggregate.output';
import { DayMinAggregate } from './day-min-aggregate.output';
import { DayMaxAggregate } from './day-max-aggregate.output';

@ObjectType()
export class AggregateDay {

    @Field(() => DayCountAggregate, {nullable:true})
    _count?: DayCountAggregate;

    @Field(() => DayAvgAggregate, {nullable:true})
    _avg?: DayAvgAggregate;

    @Field(() => DaySumAggregate, {nullable:true})
    _sum?: DaySumAggregate;

    @Field(() => DayMinAggregate, {nullable:true})
    _min?: DayMinAggregate;

    @Field(() => DayMaxAggregate, {nullable:true})
    _max?: DayMaxAggregate;
}
