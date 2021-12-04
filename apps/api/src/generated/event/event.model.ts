import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Day } from '../day/day.model';
import { Staff } from '../staff/staff.model';
import { Workspace } from '../workspace/workspace.model';
import { Int } from '@nestjs/graphql';
import { EventCount } from './event-count.output';

@ObjectType()
export class Event {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug!: string | null;

    @Field(() => [Day], {nullable:true})
    days?: Array<Day>;

    @Field(() => [Staff], {nullable:true})
    staffs?: Array<Staff>;

    @Field(() => Workspace, {nullable:true})
    workspace?: Workspace | null;

    @Field(() => Int, {nullable:true})
    workspaceId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => EventCount, {nullable:false})
    _count?: EventCount;
}
