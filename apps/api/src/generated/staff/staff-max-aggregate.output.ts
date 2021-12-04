import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StaffMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    eventId?: number;

    @Field(() => Int, {nullable:true})
    directorDayId?: number;
}
