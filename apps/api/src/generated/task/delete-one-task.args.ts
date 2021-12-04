import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@ArgsType()
export class DeleteOneTaskArgs {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;
}
