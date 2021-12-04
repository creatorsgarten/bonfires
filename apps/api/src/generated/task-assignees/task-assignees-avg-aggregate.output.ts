import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TaskAssigneesAvgAggregate {

    @Field(() => Float, {nullable:true})
    taskId?: number;

    @Field(() => Float, {nullable:true})
    staffId?: number;
}
