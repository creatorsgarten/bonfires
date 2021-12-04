import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RoleListRelationFilter } from '../role/role-list-relation-filter.input';
import { DutyListRelationFilter } from '../duty/duty-list-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';

@InputType()
export class SquadWhereInput {

    @Field(() => [SquadWhereInput], {nullable:true})
    AND?: Array<SquadWhereInput>;

    @Field(() => [SquadWhereInput], {nullable:true})
    OR?: Array<SquadWhereInput>;

    @Field(() => [SquadWhereInput], {nullable:true})
    NOT?: Array<SquadWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => RoleListRelationFilter, {nullable:true})
    roles?: RoleListRelationFilter;

    @Field(() => DutyListRelationFilter, {nullable:true})
    duties?: DutyListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: TaskListRelationFilter;
}
