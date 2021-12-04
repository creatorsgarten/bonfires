import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutDutyInput } from './task-create-without-duty.input';
import { TaskCreateOrConnectWithoutDutyInput } from './task-create-or-connect-without-duty.input';
import { TaskCreateManyDutyInputEnvelope } from './task-create-many-duty-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutDutyInput {

    @Field(() => [TaskCreateWithoutDutyInput], {nullable:true})
    create?: Array<TaskCreateWithoutDutyInput>;

    @Field(() => [TaskCreateOrConnectWithoutDutyInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutDutyInput>;

    @Field(() => TaskCreateManyDutyInputEnvelope, {nullable:true})
    createMany?: TaskCreateManyDutyInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;
}
