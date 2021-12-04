import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DutyCountOrderByAggregateInput } from './duty-count-order-by-aggregate.input';
import { DutyAvgOrderByAggregateInput } from './duty-avg-order-by-aggregate.input';
import { DutyMaxOrderByAggregateInput } from './duty-max-order-by-aggregate.input';
import { DutyMinOrderByAggregateInput } from './duty-min-order-by-aggregate.input';
import { DutySumOrderByAggregateInput } from './duty-sum-order-by-aggregate.input';

@InputType()
export class DutyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dayId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startSlot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endSlot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    squadId?: keyof typeof SortOrder;

    @Field(() => DutyCountOrderByAggregateInput, {nullable:true})
    _count?: DutyCountOrderByAggregateInput;

    @Field(() => DutyAvgOrderByAggregateInput, {nullable:true})
    _avg?: DutyAvgOrderByAggregateInput;

    @Field(() => DutyMaxOrderByAggregateInput, {nullable:true})
    _max?: DutyMaxOrderByAggregateInput;

    @Field(() => DutyMinOrderByAggregateInput, {nullable:true})
    _min?: DutyMinOrderByAggregateInput;

    @Field(() => DutySumOrderByAggregateInput, {nullable:true})
    _sum?: DutySumOrderByAggregateInput;
}
