import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutSquadInput } from './task-update-without-squad.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutSquadInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutSquadInput, {nullable:false})
    data!: TaskUpdateWithoutSquadInput;
}
