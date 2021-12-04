import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutManagerInput } from './task-update-without-manager.input';
import { TaskCreateWithoutManagerInput } from './task-create-without-manager.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutManagerInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutManagerInput, {nullable:false})
    update!: TaskUpdateWithoutManagerInput;

    @Field(() => TaskCreateWithoutManagerInput, {nullable:false})
    create!: TaskCreateWithoutManagerInput;
}
