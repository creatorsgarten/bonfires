import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutManagerInput } from './task-update-without-manager.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutManagerInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutManagerInput, {nullable:false})
    data!: TaskUpdateWithoutManagerInput;
}
