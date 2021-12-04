import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';

@InputType()
export class WorkspaceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    events?: EventOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;
}
