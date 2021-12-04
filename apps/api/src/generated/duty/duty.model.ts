import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Day } from '../day/day.model';
import { Int } from '@nestjs/graphql';
import { Squad } from '../squad/squad.model';
import { Task } from '../task/task.model';
import { DutyCount } from './duty-count.output';

@ObjectType()
export class Duty {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Day, {nullable:false})
    day?: Day;

    @Field(() => Int, {nullable:false})
    dayId!: number;

    @Field(() => Int, {nullable:false})
    startSlot!: number;

    @Field(() => Int, {nullable:false})
    endSlot!: number;

    @Field(() => Squad, {nullable:false})
    squad?: Squad;

    @Field(() => Int, {nullable:false})
    squadId!: number;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => DutyCount, {nullable:false})
    _count?: DutyCount;
}
