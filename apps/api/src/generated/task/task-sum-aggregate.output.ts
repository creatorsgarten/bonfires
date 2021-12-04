import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    squadId?: number;

    @Field(() => Int, {nullable:true})
    managerId?: number;

    @Field(() => Int, {nullable:true})
    dutyId?: number;
}
