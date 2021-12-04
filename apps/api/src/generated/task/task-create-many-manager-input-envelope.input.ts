import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyManagerInput } from './task-create-many-manager.input';

@InputType()
export class TaskCreateManyManagerInputEnvelope {

    @Field(() => [TaskCreateManyManagerInput], {nullable:false})
    data!: Array<TaskCreateManyManagerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
