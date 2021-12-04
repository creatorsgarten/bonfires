import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StaffSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    eventId?: true;

    @Field(() => Boolean, {nullable:true})
    directorDayId?: true;
}
