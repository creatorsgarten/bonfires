import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    phone!: number;

    @Field(() => Int, {nullable:false})
    homeAddress!: number;

    @Field(() => Int, {nullable:false})
    lineId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
