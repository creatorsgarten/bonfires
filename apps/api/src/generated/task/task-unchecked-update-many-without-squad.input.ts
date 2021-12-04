import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutSquadInput } from './task-create-without-squad.input';
import { TaskCreateOrConnectWithoutSquadInput } from './task-create-or-connect-without-squad.input';
import { TaskUpsertWithWhereUniqueWithoutSquadInput } from './task-upsert-with-where-unique-without-squad.input';
import { TaskCreateManySquadInputEnvelope } from './task-create-many-squad-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutSquadInput } from './task-update-with-where-unique-without-squad.input';
import { TaskUpdateManyWithWhereWithoutSquadInput } from './task-update-many-with-where-without-squad.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutSquadInput {

    @Field(() => [TaskCreateWithoutSquadInput], {nullable:true})
    create?: Array<TaskCreateWithoutSquadInput>;

    @Field(() => [TaskCreateOrConnectWithoutSquadInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutSquadInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutSquadInput], {nullable:true})
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutSquadInput>;

    @Field(() => TaskCreateManySquadInputEnvelope, {nullable:true})
    createMany?: TaskCreateManySquadInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutSquadInput], {nullable:true})
    update?: Array<TaskUpdateWithWhereUniqueWithoutSquadInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutSquadInput], {nullable:true})
    updateMany?: Array<TaskUpdateManyWithWhereWithoutSquadInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<TaskScalarWhereInput>;
}
