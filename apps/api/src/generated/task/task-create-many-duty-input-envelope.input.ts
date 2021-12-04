import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyDutyInput } from './task-create-many-duty.input';

@InputType()
export class TaskCreateManyDutyInputEnvelope {

    @Field(() => [TaskCreateManyDutyInput], {nullable:false})
    data!: Array<TaskCreateManyDutyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
