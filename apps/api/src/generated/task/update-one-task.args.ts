import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskUpdateInput } from './task-update.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@ArgsType()
export class UpdateOneTaskArgs {

    @Field(() => TaskUpdateInput, {nullable:false})
    data!: TaskUpdateInput;

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;
}
