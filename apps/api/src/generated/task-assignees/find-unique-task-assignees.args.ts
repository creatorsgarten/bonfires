import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';

@ArgsType()
export class FindUniqueTaskAssigneesArgs {

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:false})
    where!: TaskAssigneesWhereUniqueInput;
}
