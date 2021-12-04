import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TaskCreateManySquadInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

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
