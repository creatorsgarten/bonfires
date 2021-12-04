import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesCreateManyInput {

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Int, {nullable:false})
    staffId!: number;
}
