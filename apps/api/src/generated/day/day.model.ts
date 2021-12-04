import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Staff } from '../staff/staff.model';
import { Duty } from '../duty/duty.model';
import { Agenda } from '../agenda/agenda.model';
import { Event } from '../event/event.model';
import { Int } from '@nestjs/graphql';
import { DayCount } from './day-count.output';

@ObjectType()
export class Day {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [Staff], {nullable:true})
    directors?: Array<Staff>;

    @Field(() => Date, {nullable:false})
    startsAt!: Date;

    @Field(() => [Duty], {nullable:true})
    duties?: Array<Duty>;

    @Field(() => [Agenda], {nullable:true})
    agendas?: Array<Agenda>;

    @Field(() => Event, {nullable:false})
    event?: Event;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => DayCount, {nullable:false})
    _count?: DayCount;
}
