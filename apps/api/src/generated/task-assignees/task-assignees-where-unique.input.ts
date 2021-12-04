import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesTaskIdStaffIdCompoundUniqueInput } from './task-assignees-task-id-staff-id-compound-unique.input';

@InputType()
export class TaskAssigneesWhereUniqueInput {

    @Field(() => TaskAssigneesTaskIdStaffIdCompoundUniqueInput, {nullable:true})
    taskId_staffId?: TaskAssigneesTaskIdStaffIdCompoundUniqueInput;
}
