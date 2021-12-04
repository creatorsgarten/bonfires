import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { TaskAssigneesCreateInput } from './task-assignees-create.input';
import { TaskAssigneesUpdateInput } from './task-assignees-update.input';

@ArgsType()
export class UpsertOneTaskAssigneesArgs {

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:false})
    where!: TaskAssigneesWhereUniqueInput;

    @Field(() => TaskAssigneesCreateInput, {nullable:false})
    create!: TaskAssigneesCreateInput;

    @Field(() => TaskAssigneesUpdateInput, {nullable:false})
    update!: TaskAssigneesUpdateInput;
}
