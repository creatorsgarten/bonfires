import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DutySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    dayId?: true;

    @Field(() => Boolean, {nullable:true})
    startSlot?: true;

    @Field(() => Boolean, {nullable:true})
    endSlot?: true;

    @Field(() => Boolean, {nullable:true})
    squadId?: true;
}
