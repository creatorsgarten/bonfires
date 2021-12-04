import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutSquadInput } from './task-update-without-squad.input';
import { TaskCreateWithoutSquadInput } from './task-create-without-squad.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutSquadInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutSquadInput, {nullable:false})
    update!: TaskUpdateWithoutSquadInput;

    @Field(() => TaskCreateWithoutSquadInput, {nullable:false})
    create!: TaskCreateWithoutSquadInput;
}
