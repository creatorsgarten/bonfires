import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AgendaCountAggregate } from './agenda-count-aggregate.output';
import { AgendaAvgAggregate } from './agenda-avg-aggregate.output';
import { AgendaSumAggregate } from './agenda-sum-aggregate.output';
import { AgendaMinAggregate } from './agenda-min-aggregate.output';
import { AgendaMaxAggregate } from './agenda-max-aggregate.output';

@ObjectType()
export class AgendaGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    startSlot!: number;

    @Field(() => Int, {nullable:false})
    endSlot!: number;

    @Field(() => Int, {nullable:true})
    dayId?: number;

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
