import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceCreateWithoutEventsInput } from './workspace-create-without-events.input';

@InputType()
export class WorkspaceCreateOrConnectWithoutEventsInput {

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    where!: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceCreateWithoutEventsInput, {nullable:false})
    create!: WorkspaceCreateWithoutEventsInput;
}
