import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskAssigneesUncheckedUpdateManyWithoutTaskInput } from '../task-assignees/task-assignees-unchecked-update-many-without-task.input';

@InputType()
export class TaskUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    squadId?: number;

    @Field(() => Int, {nullable:true})
    managerId?: number;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Int, {nullable:true})
    dutyId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TaskAssigneesUncheckedUpdateManyWithoutTaskInput, {nullable:true})
    assignees?: TaskAssigneesUncheckedUpdateManyWithoutTaskInput;
}
