import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskAssigneesCreateManyInput } from './task-assignees-create-many.input';

@ArgsType()
export class CreateManyTaskAssigneesArgs {

    @Field(() => [TaskAssigneesCreateManyInput], {nullable:false})
    data!: Array<TaskAssigneesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
