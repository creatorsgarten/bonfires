import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
