import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    squadId?: number;

    @Field(() => Int, {nullable:true})
    managerId?: number;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Int, {nullable:true})
    dutyId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
