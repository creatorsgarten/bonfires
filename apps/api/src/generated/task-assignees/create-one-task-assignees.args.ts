import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskAssigneesCreateInput } from './task-assignees-create.input';

@ArgsType()
export class CreateOneTaskAssigneesArgs {

    @Field(() => TaskAssigneesCreateInput, {nullable:false})
    data!: TaskAssigneesCreateInput;
}
