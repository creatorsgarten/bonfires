import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyWorkspaceInput } from './event-create-many-workspace.input';

@InputType()
export class EventCreateManyWorkspaceInputEnvelope {

    @Field(() => [EventCreateManyWorkspaceInput], {nullable:false})
    data!: Array<EventCreateManyWorkspaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
