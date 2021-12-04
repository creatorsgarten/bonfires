import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StaffOrderByRelationAggregateInput } from '../staff/staff-order-by-relation-aggregate.input';
import { SquadOrderByWithRelationInput } from '../squad/squad-order-by-with-relation.input';

@InputType()
export class RoleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => StaffOrderByRelationAggregateInput, {nullable:true})
    staffs?: StaffOrderByRelationAggregateInput;

    @Field(() => SquadOrderByWithRelationInput, {nullable:true})
    squad?: SquadOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    squadId?: keyof typeof SortOrder;
}
