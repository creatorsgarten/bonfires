import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    squadId?: true;

    @Field(() => Boolean, {nullable:true})
    managerId?: true;

    @Field(() => Boolean, {nullable:true})
    dutyId?: true;
}
