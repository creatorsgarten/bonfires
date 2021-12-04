import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DayOrderByRelationAggregateInput } from '../day/day-order-by-relation-aggregate.input';
import { StaffOrderByRelationAggregateInput } from '../staff/staff-order-by-relation-aggregate.input';
import { WorkspaceOrderByWithRelationInput } from '../workspace/workspace-order-by-with-relation.input';

@InputType()
export class EventOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => DayOrderByRelationAggregateInput, {nullable:true})
    days?: DayOrderByRelationAggregateInput;

    @Field(() => StaffOrderByRelationAggregateInput, {nullable:true})
    staffs?: StaffOrderByRelationAggregateInput;

    @Field(() => WorkspaceOrderByWithRelationInput, {nullable:true})
    workspace?: WorkspaceOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    workspaceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
