import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TaskUncheckedUpdateManyWithoutManagedTasksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    squadId?: number;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Int, {nullable:true})
    dutyId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
