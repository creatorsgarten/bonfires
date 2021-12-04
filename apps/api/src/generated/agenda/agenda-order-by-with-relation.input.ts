import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DayOrderByWithRelationInput } from '../day/day-order-by-with-relation.input';

@InputType()
export class AgendaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startSlot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endSlot?: keyof typeof SortOrder;

    @Field(() => DayOrderByWithRelationInput, {nullable:true})
    day?: DayOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    dayId?: keyof typeof SortOrder;
}
