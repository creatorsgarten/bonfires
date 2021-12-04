import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutWorkspaceInput } from './event-create-without-workspace.input';
import { EventCreateOrConnectWithoutWorkspaceInput } from './event-create-or-connect-without-workspace.input';
import { EventUpsertWithWhereUniqueWithoutWorkspaceInput } from './event-upsert-with-where-unique-without-workspace.input';
import { EventCreateManyWorkspaceInputEnvelope } from './event-create-many-workspace-input-envelope.input';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutWorkspaceInput } from './event-update-with-where-unique-without-workspace.input';
import { EventUpdateManyWithWhereWithoutWorkspaceInput } from './event-update-many-with-where-without-workspace.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUpdateManyWithoutWorkspaceInput {

    @Field(() => [EventCreateWithoutWorkspaceInput], {nullable:true})
    create?: Array<EventCreateWithoutWorkspaceInput>;

    @Field(() => [EventCreateOrConnectWithoutWorkspaceInput], {nullable:true})
    connectOrCreate?: Array<EventCreateOrConnectWithoutWorkspaceInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutWorkspaceInput], {nullable:true})
    upsert?: Array<EventUpsertWithWhereUniqueWithoutWorkspaceInput>;

    @Field(() => EventCreateManyWorkspaceInputEnvelope, {nullable:true})
    createMany?: EventCreateManyWorkspaceInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    set?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    disconnect?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    delete?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    connect?: Array<EventWhereUniqueInput>;

    @Field(() => [EventUpdateWithWhereUniqueWithoutWorkspaceInput], {nullable:true})
    update?: Array<EventUpdateWithWhereUniqueWithoutWorkspaceInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutWorkspaceInput], {nullable:true})
    updateMany?: Array<EventUpdateManyWithWhereWithoutWorkspaceInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    deleteMany?: Array<EventScalarWhereInput>;
}
