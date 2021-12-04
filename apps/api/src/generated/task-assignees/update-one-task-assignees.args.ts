import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskAssigneesUpdateInput } from './task-assignees-update.input';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';

@ArgsType()
export class UpdateOneTaskAssigneesArgs {

    @Field(() => TaskAssigneesUpdateInput, {nullable:false})
    data!: TaskAssigneesUpdateInput;

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:false})
    where!: TaskAssigneesWhereUniqueInput;
}
