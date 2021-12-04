import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadCreateNestedOneWithoutTasksInput } from '../squad/squad-create-nested-one-without-tasks.input';
import { TaskAssigneesCreateNestedManyWithoutTaskInput } from '../task-assignees/task-assignees-create-nested-many-without-task.input';
import { DutyCreateNestedOneWithoutTasksInput } from '../duty/duty-create-nested-one-without-tasks.input';

@InputType()
export class TaskCreateWithoutManagerInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SquadCreateNestedOneWithoutTasksInput, {nullable:true})
    squad?: SquadCreateNestedOneWithoutTasksInput;

    @Field(() => TaskAssigneesCreateNestedManyWithoutTaskInput, {nullable:true})
    assignees?: TaskAssigneesCreateNestedManyWithoutTaskInput;

    @Field(() => DutyCreateNestedOneWithoutTasksInput, {nullable:true})
    duty?: DutyCreateNestedOneWithoutTasksInput;
}
