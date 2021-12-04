import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesCreateManyTaskInput } from './task-assignees-create-many-task.input';

@InputType()
export class TaskAssigneesCreateManyTaskInputEnvelope {

    @Field(() => [TaskAssigneesCreateManyTaskInput], {nullable:false})
    data!: Array<TaskAssigneesCreateManyTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
