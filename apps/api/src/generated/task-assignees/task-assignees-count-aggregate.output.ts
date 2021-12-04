import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskAssigneesCountAggregate {

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Int, {nullable:false})
    staffId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
