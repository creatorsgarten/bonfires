import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskWhereInput } from './task-where.input';

@ArgsType()
export class DeleteManyTaskArgs {

    @Field(() => TaskWhereInput, {nullable:true})
    where?: TaskWhereInput;
}
