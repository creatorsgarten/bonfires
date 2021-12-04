import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutWorkspacesInput } from '../user/user-create-nested-many-without-workspaces.input';

@InputType()
export class WorkspaceCreateWithoutEventsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => UserCreateNestedManyWithoutWorkspacesInput, {nullable:true})
    users?: UserCreateNestedManyWithoutWorkspacesInput;
}
