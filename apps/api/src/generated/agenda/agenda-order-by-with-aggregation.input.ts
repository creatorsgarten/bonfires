import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AgendaCountOrderByAggregateInput } from './agenda-count-order-by-aggregate.input';
import { AgendaAvgOrderByAggregateInput } from './agenda-avg-order-by-aggregate.input';
import { AgendaMaxOrderByAggregateInput } from './agenda-max-order-by-aggregate.input';
import { AgendaMinOrderByAggregateInput } from './agenda-min-order-by-aggregate.input';
import { AgendaSumOrderByAggregateInput } from './agenda-sum-order-by-aggregate.input';

@InputType()
export class AgendaOrderByWithAggregationInput {

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

    @Field(() => AgendaCountOrderByAggregateInput, {nullable:true})
    _count?: AgendaCountOrderByAggregateInput;

    @Field(() => AgendaAvgOrderByAggregateInput, {nullable:true})
    _avg?: AgendaAvgOrderByAggregateInput;

    @Field(() => AgendaMaxOrderByAggregateInput, {nullable:true})
    _max?: AgendaMaxOrderByAggregateInput;

    @Field(() => AgendaMinOrderByAggregateInput, {nullable:true})
    _min?: AgendaMinOrderByAggregateInput;

    @Field(() => AgendaSumOrderByAggregateInput, {nullable:true})
    _sum?: AgendaSumOrderByAggregateInput;
}
