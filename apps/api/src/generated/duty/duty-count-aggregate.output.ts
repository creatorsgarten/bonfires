import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DutyCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    dayId!: number;

    @Field(() => Int, {nullable:false})
    startSlot!: number;

    @Field(() => Int, {nullable:false})
    endSlot!: number;

    @Field(() => Int, {nullable:false})
    squadId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
