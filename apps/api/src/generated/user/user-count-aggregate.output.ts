import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @Field(() => Int, {nullable:false})
    displayName!: number;

    @Field(() => Int, {nullable:false})
    photo!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
