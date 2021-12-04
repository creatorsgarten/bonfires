import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StaffCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    displayName?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    eventId?: true;

    @Field(() => Boolean, {nullable:true})
    directorDayId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
