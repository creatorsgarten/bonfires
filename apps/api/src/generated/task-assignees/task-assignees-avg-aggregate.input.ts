import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    taskId?: true;

    @Field(() => Boolean, {nullable:true})
    staffId?: true;
}
