import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { TaskAssigneesUpdateWithoutStaffInput } from './task-assignees-update-without-staff.input';
import { TaskAssigneesCreateWithoutStaffInput } from './task-assignees-create-without-staff.input';

@InputType()
export class TaskAssigneesUpsertWithWhereUniqueWithoutStaffInput {

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:false})
    where!: TaskAssigneesWhereUniqueInput;

    @Field(() => TaskAssigneesUpdateWithoutStaffInput, {nullable:false})
    update!: TaskAssigneesUpdateWithoutStaffInput;

    @Field(() => TaskAssigneesCreateWithoutStaffInput, {nullable:false})
    create!: TaskAssigneesCreateWithoutStaffInput;
}
