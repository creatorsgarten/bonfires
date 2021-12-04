import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TaskAssigneesCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    staffId?: keyof typeof SortOrder;
}
