import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByRelationAggregateInput } from '../role/role-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';
import { TaskAssigneesOrderByRelationAggregateInput } from '../task-assignees/task-assignees-order-by-relation-aggregate.input';
import { DayOrderByWithRelationInput } from '../day/day-order-by-with-relation.input';

@InputType()
export class StaffOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;

    @Field(() => RoleOrderByRelationAggregateInput, {nullable:true})
    roles?: RoleOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => EventOrderByWithRelationInput, {nullable:true})
    event?: EventOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    managedTasks?: TaskOrderByRelationAggregateInput;

    @Field(() => TaskAssigneesOrderByRelationAggregateInput, {nullable:true})
    assignedTasks?: TaskAssigneesOrderByRelationAggregateInput;

    @Field(() => DayOrderByWithRelationInput, {nullable:true})
    directorDay?: DayOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    directorDayId?: keyof typeof SortOrder;
}
