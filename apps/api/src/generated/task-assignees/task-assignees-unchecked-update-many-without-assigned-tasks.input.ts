import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TaskAssigneesUncheckedUpdateManyWithoutAssignedTasksInput {

    @Field(() => Int, {nullable:true})
    taskId?: number;
}
