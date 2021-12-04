import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByRelationAggregateInput } from '../role/role-order-by-relation-aggregate.input';
import { DutyOrderByRelationAggregateInput } from '../duty/duty-order-by-relation-aggregate.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';

@InputType()
export class SquadOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => RoleOrderByRelationAggregateInput, {nullable:true})
    roles?: RoleOrderByRelationAggregateInput;

    @Field(() => DutyOrderByRelationAggregateInput, {nullable:true})
    duties?: DutyOrderByRelationAggregateInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    tasks?: TaskOrderByRelationAggregateInput;
}
