import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkspaceOrderByRelationAggregateInput } from '../workspace/workspace-order-by-relation-aggregate.input';
import { StaffOrderByRelationAggregateInput } from '../staff/staff-order-by-relation-aggregate.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photo?: keyof typeof SortOrder;

    @Field(() => WorkspaceOrderByRelationAggregateInput, {nullable:true})
    workspaces?: WorkspaceOrderByRelationAggregateInput;

    @Field(() => StaffOrderByRelationAggregateInput, {nullable:true})
    staffs?: StaffOrderByRelationAggregateInput;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;
}
