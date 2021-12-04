import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AgendaAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    startSlot?: true;

    @Field(() => Boolean, {nullable:true})
    endSlot?: true;

    @Field(() => Boolean, {nullable:true})
    dayId?: true;
}
