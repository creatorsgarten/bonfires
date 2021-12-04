import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DayAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    eventId?: number;
}
