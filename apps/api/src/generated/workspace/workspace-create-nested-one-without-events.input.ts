import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutEventsInput } from './workspace-create-without-events.input';
import { WorkspaceCreateOrConnectWithoutEventsInput } from './workspace-create-or-connect-without-events.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';

@InputType()
export class WorkspaceCreateNestedOneWithoutEventsInput {

    @Field(() => WorkspaceCreateWithoutEventsInput, {nullable:true})
    create?: WorkspaceCreateWithoutEventsInput;

    @Field(() => WorkspaceCreateOrConnectWithoutEventsInput, {nullable:true})
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEventsInput;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:true})
    connect?: WorkspaceWhereUniqueInput;
}
