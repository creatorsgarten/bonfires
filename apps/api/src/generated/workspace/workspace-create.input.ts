import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedManyWithoutWorkspaceInput } from '../event/event-create-nested-many-without-workspace.input';
import { UserCreateNestedManyWithoutWorkspacesInput } from '../user/user-create-nested-many-without-workspaces.input';

@InputType()
export class WorkspaceCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => EventCreateNestedManyWithoutWorkspaceInput, {nullable:true})
    events?: EventCreateNestedManyWithoutWorkspaceInput;

    @Field(() => UserCreateNestedManyWithoutWorkspacesInput, {nullable:true})
    users?: UserCreateNestedManyWithoutWorkspacesInput;
}
