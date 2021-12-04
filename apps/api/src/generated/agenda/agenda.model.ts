import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Day } from '../day/day.model';

@ObjectType()
export class Agenda {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    startSlot!: number;

    @Field(() => Int, {nullable:false})
    endSlot!: number;

    @Field(() => Day, {nullable:true})
    day?: Day | null;

    @Field(() => Int, {nullable:true})
    dayId!: number | null;
}
