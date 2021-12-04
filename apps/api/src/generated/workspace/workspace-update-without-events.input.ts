import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateManyWithoutWorkspacesInput } from '../user/user-update-many-without-workspaces.input';

@InputType()
export class WorkspaceUpdateWithoutEventsInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => UserUpdateManyWithoutWorkspacesInput, {nullable:true})
    users?: UserUpdateManyWithoutWorkspacesInput;
}
