import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskCreateWithoutSquadInput } from './task-create-without-squad.input';

@InputType()
export class TaskCreateOrConnectWithoutSquadInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutSquadInput, {nullable:false})
    create!: TaskCreateWithoutSquadInput;
}
