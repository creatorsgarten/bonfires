import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SquadCount {

    @Field(() => Int, {nullable:false})
    roles!: number;

    @Field(() => Int, {nullable:false})
    duties!: number;

    @Field(() => Int, {nullable:false})
    tasks!: number;
}
