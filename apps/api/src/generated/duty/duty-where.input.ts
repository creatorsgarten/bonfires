import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DayRelationFilter } from '../day/day-relation-filter.input';
import { SquadRelationFilter } from '../squad/squad-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';

@InputType()
export class DutyWhereInput {

    @Field(() => [DutyWhereInput], {nullable:true})
    AND?: Array<DutyWhereInput>;

    @Field(() => [DutyWhereInput], {nullable:true})
    OR?: Array<DutyWhereInput>;

    @Field(() => [DutyWhereInput], {nullable:true})
    NOT?: Array<DutyWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => DayRelationFilter, {nullable:true})
    day?: DayRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    dayId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    startSlot?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    endSlot?: IntFilter;

    @Field(() => SquadRelationFilter, {nullable:true})
    squad?: SquadRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    squadId?: IntFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: TaskListRelationFilter;
}
