import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedManyWithoutWorkspaceInput } from '../event/event-create-nested-many-without-workspace.input';

@InputType()
export class WorkspaceCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => EventCreateNestedManyWithoutWorkspaceInput, {nullable:true})
    events?: EventCreateNestedManyWithoutWorkspaceInput;
}
