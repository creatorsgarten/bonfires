import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutDutyInput } from './task-update-without-duty.input';
import { TaskCreateWithoutDutyInput } from './task-create-without-duty.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutDutyInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutDutyInput, {nullable:false})
    update!: TaskUpdateWithoutDutyInput;

    @Field(() => TaskCreateWithoutDutyInput, {nullable:false})
    create!: TaskCreateWithoutDutyInput;
}
