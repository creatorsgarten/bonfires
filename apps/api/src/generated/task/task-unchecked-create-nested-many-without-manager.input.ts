import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutManagerInput } from './task-create-without-manager.input';
import { TaskCreateOrConnectWithoutManagerInput } from './task-create-or-connect-without-manager.input';
import { TaskCreateManyManagerInputEnvelope } from './task-create-many-manager-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutManagerInput {

    @Field(() => [TaskCreateWithoutManagerInput], {nullable:true})
    create?: Array<TaskCreateWithoutManagerInput>;

    @Field(() => [TaskCreateOrConnectWithoutManagerInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutManagerInput>;

    @Field(() => TaskCreateManyManagerInputEnvelope, {nullable:true})
    createMany?: TaskCreateManyManagerInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;
}
