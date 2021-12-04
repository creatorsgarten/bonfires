import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SquadCountOrderByAggregateInput } from './squad-count-order-by-aggregate.input';
import { SquadAvgOrderByAggregateInput } from './squad-avg-order-by-aggregate.input';
import { SquadMaxOrderByAggregateInput } from './squad-max-order-by-aggregate.input';
import { SquadMinOrderByAggregateInput } from './squad-min-order-by-aggregate.input';
import { SquadSumOrderByAggregateInput } from './squad-sum-order-by-aggregate.input';

@InputType()
export class SquadOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SquadCountOrderByAggregateInput, {nullable:true})
    _count?: SquadCountOrderByAggregateInput;

    @Field(() => SquadAvgOrderByAggregateInput, {nullable:true})
    _avg?: SquadAvgOrderByAggregateInput;

    @Field(() => SquadMaxOrderByAggregateInput, {nullable:true})
    _max?: SquadMaxOrderByAggregateInput;

    @Field(() => SquadMinOrderByAggregateInput, {nullable:true})
    _min?: SquadMinOrderByAggregateInput;

    @Field(() => SquadSumOrderByAggregateInput, {nullable:true})
    _sum?: SquadSumOrderByAggregateInput;
}
