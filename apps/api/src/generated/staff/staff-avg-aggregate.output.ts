import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class StaffAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    eventId?: number;

    @Field(() => Float, {nullable:true})
    directorDayId?: number;
}
