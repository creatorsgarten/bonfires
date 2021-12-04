import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskScalarWhereInput } from './task-scalar-where.input';
import { TaskUpdateManyMutationInput } from './task-update-many-mutation.input';

@InputType()
export class TaskUpdateManyWithWhereWithoutManagerInput {

    @Field(() => TaskScalarWhereInput, {nullable:false})
    where!: TaskScalarWhereInput;

    @Field(() => TaskUpdateManyMutationInput, {nullable:false})
    data!: TaskUpdateManyMutationInput;
}
