import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskCreateWithoutDutyInput } from './task-create-without-duty.input';

@InputType()
export class TaskCreateOrConnectWithoutDutyInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutDutyInput, {nullable:false})
    create!: TaskCreateWithoutDutyInput;
}
