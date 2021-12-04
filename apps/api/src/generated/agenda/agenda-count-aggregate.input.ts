import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AgendaCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    startSlot?: true;

    @Field(() => Boolean, {nullable:true})
    endSlot?: true;

    @Field(() => Boolean, {nullable:true})
    dayId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
