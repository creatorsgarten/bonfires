import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutDutyInput } from './task-update-without-duty.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutDutyInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutDutyInput, {nullable:false})
    data!: TaskUpdateWithoutDutyInput;
}
