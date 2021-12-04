import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    taskId?: true;

    @Field(() => Boolean, {nullable:true})
    staffId?: true;
}
