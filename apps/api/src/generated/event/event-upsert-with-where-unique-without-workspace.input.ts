import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithoutWorkspaceInput } from './event-update-without-workspace.input';
import { EventCreateWithoutWorkspaceInput } from './event-create-without-workspace.input';

@InputType()
export class EventUpsertWithWhereUniqueWithoutWorkspaceInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutWorkspaceInput, {nullable:false})
    update!: EventUpdateWithoutWorkspaceInput;

    @Field(() => EventCreateWithoutWorkspaceInput, {nullable:false})
    create!: EventCreateWithoutWorkspaceInput;
}
