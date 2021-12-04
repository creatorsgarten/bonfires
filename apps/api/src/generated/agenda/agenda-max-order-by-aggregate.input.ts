import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AgendaMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startSlot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endSlot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dayId?: keyof typeof SortOrder;
}
