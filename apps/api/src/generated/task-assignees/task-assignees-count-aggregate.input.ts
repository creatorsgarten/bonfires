import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    taskId?: true;

    @Field(() => Boolean, {nullable:true})
    staffId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
