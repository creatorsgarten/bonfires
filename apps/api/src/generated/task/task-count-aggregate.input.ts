import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    squadId?: true;

    @Field(() => Boolean, {nullable:true})
    managerId?: true;

    @Field(() => Boolean, {nullable:true})
    dueDate?: true;

    @Field(() => Boolean, {nullable:true})
    dutyId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
