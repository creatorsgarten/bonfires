import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DutyAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    dayId?: number;

    @Field(() => Float, {nullable:true})
    startSlot?: number;

    @Field(() => Float, {nullable:true})
    endSlot?: number;

    @Field(() => Float, {nullable:true})
    squadId?: number;
}
