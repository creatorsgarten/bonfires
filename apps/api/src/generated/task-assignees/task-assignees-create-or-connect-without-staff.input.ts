import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { TaskAssigneesCreateWithoutStaffInput } from './task-assignees-create-without-staff.input';

@InputType()
export class TaskAssigneesCreateOrConnectWithoutStaffInput {

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:false})
    where!: TaskAssigneesWhereUniqueInput;

    @Field(() => TaskAssigneesCreateWithoutStaffInput, {nullable:false})
    create!: TaskAssigneesCreateWithoutStaffInput;
}
