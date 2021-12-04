import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventCreateWithoutWorkspaceInput } from './event-create-without-workspace.input';

@InputType()
export class EventCreateOrConnectWithoutWorkspaceInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventCreateWithoutWorkspaceInput, {nullable:false})
    create!: EventCreateWithoutWorkspaceInput;
}
