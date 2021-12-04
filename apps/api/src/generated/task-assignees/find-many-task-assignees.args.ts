import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskAssigneesWhereInput } from './task-assignees-where.input';
import { TaskAssigneesOrderByWithRelationInput } from './task-assignees-order-by-with-relation.input';
import { TaskAssigneesWhereUniqueInput } from './task-assignees-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskAssigneesScalarFieldEnum } from './task-assignees-scalar-field.enum';

@ArgsType()
export class FindManyTaskAssigneesArgs {

    @Field(() => TaskAssigneesWhereInput, {nullable:true})
    where?: TaskAssigneesWhereInput;

    @Field(() => [TaskAssigneesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskAssigneesOrderByWithRelationInput>;

    @Field(() => TaskAssigneesWhereUniqueInput, {nullable:true})
    cursor?: TaskAssigneesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TaskAssigneesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TaskAssigneesScalarFieldEnum>;
}
