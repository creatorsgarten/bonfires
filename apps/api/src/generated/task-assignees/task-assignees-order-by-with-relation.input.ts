import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskOrderByWithRelationInput } from '../task/task-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { StaffOrderByWithRelationInput } from '../staff/staff-order-by-with-relation.input';

@InputType()
export class TaskAssigneesOrderByWithRelationInput {

    @Field(() => TaskOrderByWithRelationInput, {nullable:true})
    task?: TaskOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => StaffOrderByWithRelationInput, {nullable:true})
    staff?: StaffOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    staffId?: keyof typeof SortOrder;
}
