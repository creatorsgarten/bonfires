import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DayMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => Int, {nullable:true})
    eventId?: number;
}
