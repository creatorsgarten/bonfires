import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DayOrderByWithRelationInput } from '../day/day-order-by-with-relation.input';
import { SquadOrderByWithRelationInput } from '../squad/squad-order-by-with-relation.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';

@InputType()
export class DutyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => DayOrderByWithRelationInput, {nullable:true})
    day?: DayOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    dayId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startSlot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endSlot?: keyof typeof SortOrder;

    @Field(() => SquadOrderByWithRelationInput, {nullable:true})
    squad?: SquadOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    squadId?: keyof typeof SortOrder;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    tasks?: TaskOrderByRelationAggregateInput;
}
