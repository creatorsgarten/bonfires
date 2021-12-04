import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateManyWithoutWorkspaceInput } from '../event/event-update-many-without-workspace.input';
import { UserUpdateManyWithoutWorkspacesInput } from '../user/user-update-many-without-workspaces.input';

@InputType()
export class WorkspaceUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => EventUpdateManyWithoutWorkspaceInput, {nullable:true})
    events?: EventUpdateManyWithoutWorkspaceInput;

    @Field(() => UserUpdateManyWithoutWorkspacesInput, {nullable:true})
    users?: UserUpdateManyWithoutWorkspacesInput;
}
