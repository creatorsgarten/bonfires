import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { TaskAssigneesUpdateWithoutStaffInput } from './task-assignees-update-without-staff.input';

@InputType()
export class TaskAssigneesUpdateWithWhereUniqueWithoutStaffInput {

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:false})
    where!: TaskAssigneesWhereUniqueInput;

    @Field(() => TaskAssigneesUpdateWithoutStaffInput, {nullable:false})
    data!: TaskAssigneesUpdateWithoutStaffInput;
}
