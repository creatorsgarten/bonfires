import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskCreateManyInput } from './task-create-many.input';

@ArgsType()
export class CreateManyTaskArgs {

    @Field(() => [TaskCreateManyInput], {nullable:false})
    data!: Array<TaskCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
