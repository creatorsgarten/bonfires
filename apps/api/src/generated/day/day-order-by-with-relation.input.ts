import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StaffOrderByRelationAggregateInput } from '../staff/staff-order-by-relation-aggregate.input';
import { DutyOrderByRelationAggregateInput } from '../duty/duty-order-by-relation-aggregate.input';
import { AgendaOrderByRelationAggregateInput } from '../agenda/agenda-order-by-relation-aggregate.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';

@InputType()
export class DayOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => StaffOrderByRelationAggregateInput, {nullable:true})
    directors?: StaffOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    startsAt?: keyof typeof SortOrder;

    @Field(() => DutyOrderByRelationAggregateInput, {nullable:true})
    duties?: DutyOrderByRelationAggregateInput;

    @Field(() => AgendaOrderByRelationAggregateInput, {nullable:true})
    agendas?: AgendaOrderByRelationAggregateInput;

    @Field(() => EventOrderByWithRelationInput, {nullable:true})
    event?: EventOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;
}
