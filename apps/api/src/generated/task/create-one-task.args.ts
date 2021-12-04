import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskCreateInput } from './task-create.input';

@ArgsType()
export class CreateOneTaskArgs {

    @Field(() => TaskCreateInput, {nullable:false})
    data!: TaskCreateInput;
}
