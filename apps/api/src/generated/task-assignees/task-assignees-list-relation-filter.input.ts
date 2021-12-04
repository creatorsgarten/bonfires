import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskAssigneesWhereInput } from './task-assignees-where.input';

@InputType()
export class TaskAssigneesListRelationFilter {

    @Field(() => TaskAssigneesWhereInput, {nullable:true})
    every?: TaskAssigneesWhereInput;

    @Field(() => TaskAssigneesWhereInput, {nullable:true})
    some?: TaskAssigneesWhereInput;

    @Field(() => TaskAssigneesWhereInput, {nullable:true})
    none?: TaskAssigneesWhereInput;
}
