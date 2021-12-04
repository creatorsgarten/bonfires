import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DutyCountAggregate } from './duty-count-aggregate.output';
import { DutyAvgAggregate } from './duty-avg-aggregate.output';
import { DutySumAggregate } from './duty-sum-aggregate.output';
import { DutyMinAggregate } from './duty-min-aggregate.output';
import { DutyMaxAggregate } from './duty-max-aggregate.output';

@ObjectType()
export class DutyGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    dayId!: number;

    @Field(() => Int, {nullable:false})
    startSlot!: number;

    @Field(() => Int, {nullable:false})
    endSlot!: number;

    @Field(() => Int, {nullable:false})
    squadId!: number;

    @Field(() => DutyCountAggregate, {nullable:true})
    _count?: DutyCountAggregate;

    @Field(() => DutyAvgAggregate, {nullable:true})
    _avg?: DutyAvgAggregate;

    @Field(() => DutySumAggregate, {nullable:true})
    _sum?: DutySumAggregate;

    @Field(() => DutyMinAggregate, {nullable:true})
    _min?: DutyMinAggregate;

    @Field(() => DutyMaxAggregate, {nullable:true})
    _max?: DutyMaxAggregate;
}
