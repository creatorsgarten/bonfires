import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithoutWorkspaceInput } from './event-update-without-workspace.input';

@InputType()
export class EventUpdateWithWhereUniqueWithoutWorkspaceInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutWorkspaceInput, {nullable:false})
    data!: EventUpdateWithoutWorkspaceInput;
}
