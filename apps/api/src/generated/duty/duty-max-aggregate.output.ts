import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DutyMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    dayId?: number;

    @Field(() => Int, {nullable:true})
    startSlot?: number;

    @Field(() => Int, {nullable:true})
    endSlot?: number;

    @Field(() => Int, {nullable:true})
    squadId?: number;
}
