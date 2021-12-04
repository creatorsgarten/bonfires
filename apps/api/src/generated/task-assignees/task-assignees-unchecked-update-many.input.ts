import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesUncheckedUpdateManyInput {

    @Field(() => Int, {nullable:true})
    taskId?: number;

    @Field(() => Int, {nullable:true})
    staffId?: number;
}
