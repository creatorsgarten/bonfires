import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateManyWithoutWorkspaceInput } from '../event/event-update-many-without-workspace.input';

@InputType()
export class WorkspaceUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => EventUpdateManyWithoutWorkspaceInput, {nullable:true})
    events?: EventUpdateManyWithoutWorkspaceInput;
}
