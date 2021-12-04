import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventCount {

    @Field(() => Int, {nullable:false})
    days!: number;

    @Field(() => Int, {nullable:false})
    staffs!: number;
}
