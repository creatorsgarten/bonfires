import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutWorkspaceInput } from './event-create-without-workspace.input';
import { EventCreateOrConnectWithoutWorkspaceInput } from './event-create-or-connect-without-workspace.input';
import { EventCreateManyWorkspaceInputEnvelope } from './event-create-many-workspace-input-envelope.input';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedManyWithoutWorkspaceInput {

    @Field(() => [EventCreateWithoutWorkspaceInput], {nullable:true})
    create?: Array<EventCreateWithoutWorkspaceInput>;

    @Field(() => [EventCreateOrConnectWithoutWorkspaceInput], {nullable:true})
    connectOrCreate?: Array<EventCreateOrConnectWithoutWorkspaceInput>;

    @Field(() => EventCreateManyWorkspaceInputEnvelope, {nullable:true})
    createMany?: EventCreateManyWorkspaceInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    connect?: Array<EventWhereUniqueInput>;
}
