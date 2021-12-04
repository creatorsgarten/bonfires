import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskAssigneesMaxAggregate {

    @Field(() => Int, {nullable:true})
    taskId?: number;

    @Field(() => Int, {nullable:true})
    staffId?: number;
}
