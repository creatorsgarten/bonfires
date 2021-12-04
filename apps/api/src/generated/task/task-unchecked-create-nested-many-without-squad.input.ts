import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutSquadInput } from './task-create-without-squad.input';
import { TaskCreateOrConnectWithoutSquadInput } from './task-create-or-connect-without-squad.input';
import { TaskCreateManySquadInputEnvelope } from './task-create-many-squad-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutSquadInput {

    @Field(() => [TaskCreateWithoutSquadInput], {nullable:true})
    create?: Array<TaskCreateWithoutSquadInput>;

    @Field(() => [TaskCreateOrConnectWithoutSquadInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutSquadInput>;

    @Field(() => TaskCreateManySquadInputEnvelope, {nullable:true})
    createMany?: TaskCreateManySquadInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;
}
