import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DayMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    startsAt?: true;

    @Field(() => Boolean, {nullable:true})
    eventId?: true;
}
