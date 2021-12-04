import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DayCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    startsAt!: number;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
