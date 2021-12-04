import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StaffCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    displayName!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:false})
    directorDayId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
