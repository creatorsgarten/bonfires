import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesCreateManyTaskInput {

    @Field(() => Int, {nullable:false})
    staffId!: number;
}
