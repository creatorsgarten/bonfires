import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskCreateWithoutManagerInput } from './task-create-without-manager.input';

@InputType()
export class TaskCreateOrConnectWithoutManagerInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutManagerInput, {nullable:false})
    create!: TaskCreateWithoutManagerInput;
}
