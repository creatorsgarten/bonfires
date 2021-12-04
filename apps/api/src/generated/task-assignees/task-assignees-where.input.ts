import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskRelationFilter } from '../task/task-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StaffRelationFilter } from '../staff/staff-relation-filter.input';

@InputType()
export class TaskAssigneesWhereInput {

    @Field(() => [TaskAssigneesWhereInput], {nullable:true})
    AND?: Array<TaskAssigneesWhereInput>;

    @Field(() => [TaskAssigneesWhereInput], {nullable:true})
    OR?: Array<TaskAssigneesWhereInput>;

    @Field(() => [TaskAssigneesWhereInput], {nullable:true})
    NOT?: Array<TaskAssigneesWhereInput>;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;

    @Field(() => StaffRelationFilter, {nullable:true})
    staff?: StaffRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    staffId?: IntFilter;
}
