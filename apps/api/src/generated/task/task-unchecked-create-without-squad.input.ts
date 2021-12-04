import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskAssigneesUncheckedCreateNestedManyWithoutTaskInput } from '../task-assignees/task-assignees-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateWithoutSquadInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

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

    @Field(() => TaskAssigneesUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    assignees?: TaskAssigneesUncheckedCreateNestedManyWithoutTaskInput;
}
