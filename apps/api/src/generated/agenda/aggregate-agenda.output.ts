import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AgendaCountAggregate } from './agenda-count-aggregate.output';
import { AgendaAvgAggregate } from './agenda-avg-aggregate.output';
import { AgendaSumAggregate } from './agenda-sum-aggregate.output';
import { AgendaMinAggregate } from './agenda-min-aggregate.output';
import { AgendaMaxAggregate } from './agenda-max-aggregate.output';

@ObjectType()
export class AggregateAgenda {

    @Field(() => AgendaCountAggregate, {nullable:true})
    _count?: AgendaCountAggregate;

    @Field(() => AgendaAvgAggregate, {nullable:true})
    _avg?: AgendaAvgAggregate;

    @Field(() => AgendaSumAggregate, {nullable:true})
    _sum?: AgendaSumAggregate;

    @Field(() => AgendaMinAggregate, {nullable:true})
    _min?: AgendaMinAggregate;

    @Field(() => AgendaMaxAggregate, {nullable:true})
    _max?: AgendaMaxAggregate;
}
