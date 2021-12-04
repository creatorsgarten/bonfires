import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StaffCountAggregate } from './staff-count-aggregate.output';
import { StaffAvgAggregate } from './staff-avg-aggregate.output';
import { StaffSumAggregate } from './staff-sum-aggregate.output';
import { StaffMinAggregate } from './staff-min-aggregate.output';
import { StaffMaxAggregate } from './staff-max-aggregate.output';

@ObjectType()
export class AggregateStaff {

    @Field(() => StaffCountAggregate, {nullable:true})
    _count?: StaffCountAggregate;

    @Field(() => StaffAvgAggregate, {nullable:true})
    _avg?: StaffAvgAggregate;

    @Field(() => StaffSumAggregate, {nullable:true})
    _sum?: StaffSumAggregate;

    @Field(() => StaffMinAggregate, {nullable:true})
    _min?: StaffMinAggregate;

    @Field(() => StaffMaxAggregate, {nullable:true})
    _max?: StaffMaxAggregate;
}
