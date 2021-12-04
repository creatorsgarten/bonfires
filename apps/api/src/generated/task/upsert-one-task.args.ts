import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskCreateInput } from './task-create.input';
import { TaskUpdateInput } from './task-update.input';

@ArgsType()
export class UpsertOneTaskArgs {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateInput, {nullable:false})
    create!: TaskCreateInput;

    @Field(() => TaskUpdateInput, {nullable:false})
    update!: TaskUpdateInput;
}
