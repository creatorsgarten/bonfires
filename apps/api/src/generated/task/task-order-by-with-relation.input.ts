import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SquadOrderByWithRelationInput } from '../squad/squad-order-by-with-relation.input';
import { StaffOrderByWithRelationInput } from '../staff/staff-order-by-with-relation.input';
import { TaskAssigneesOrderByRelationAggregateInput } from '../task-assignees/task-assignees-order-by-relation-aggregate.input';
import { DutyOrderByWithRelationInput } from '../duty/duty-order-by-with-relation.input';

@InputType()
export class TaskOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SquadOrderByWithRelationInput, {nullable:true})
    squad?: SquadOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    squadId?: keyof typeof SortOrder;

    @Field(() => StaffOrderByWithRelationInput, {nullable:true})
    manager?: StaffOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    managerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => TaskAssigneesOrderByRelationAggregateInput, {nullable:true})
    assignees?: TaskAssigneesOrderByRelationAggregateInput;

    @Field(() => DutyOrderByWithRelationInput, {nullable:true})
    duty?: DutyOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    dutyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
