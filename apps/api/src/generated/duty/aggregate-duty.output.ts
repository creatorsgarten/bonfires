import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DutyCountAggregate } from './duty-count-aggregate.output';
import { DutyAvgAggregate } from './duty-avg-aggregate.output';
import { DutySumAggregate } from './duty-sum-aggregate.output';
import { DutyMinAggregate } from './duty-min-aggregate.output';
import { DutyMaxAggregate } from './duty-max-aggregate.output';

@ObjectType()
export class AggregateDuty {

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
