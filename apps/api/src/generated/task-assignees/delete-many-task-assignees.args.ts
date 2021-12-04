import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskAssigneesWhereInput } from './task-assignees-where.input';

@ArgsType()
export class DeleteManyTaskAssigneesArgs {

    @Field(() => TaskAssigneesWhereInput, {nullable:true})
    where?: TaskAssigneesWhereInput;
}
