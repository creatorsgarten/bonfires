import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RoleCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    squadId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
