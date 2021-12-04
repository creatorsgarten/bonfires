import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StaffListRelationFilter } from '../staff/staff-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DutyListRelationFilter } from '../duty/duty-list-relation-filter.input';
import { AgendaListRelationFilter } from '../agenda/agenda-list-relation-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';

@InputType()
export class DayWhereInput {

    @Field(() => [DayWhereInput], {nullable:true})
    AND?: Array<DayWhereInput>;

    @Field(() => [DayWhereInput], {nullable:true})
    OR?: Array<DayWhereInput>;

    @Field(() => [DayWhereInput], {nullable:true})
    NOT?: Array<DayWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StaffListRelationFilter, {nullable:true})
    directors?: StaffListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startsAt?: DateTimeFilter;

    @Field(() => DutyListRelationFilter, {nullable:true})
    duties?: DutyListRelationFilter;

    @Field(() => AgendaListRelationFilter, {nullable:true})
    agendas?: AgendaListRelationFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    event?: EventRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    eventId?: IntFilter;
}
