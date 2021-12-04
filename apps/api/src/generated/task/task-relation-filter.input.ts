import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereInput } from './task-where.input';

@InputType()
export class TaskRelationFilter {

    @Field(() => TaskWhereInput, {nullable:true})
    is?: TaskWhereInput;

    @Field(() => TaskWhereInput, {nullable:true})
    isNot?: TaskWhereInput;
}
