import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceUpdateWithoutEventsInput } from './workspace-update-without-events.input';
import { WorkspaceCreateWithoutEventsInput } from './workspace-create-without-events.input';

@InputType()
export class WorkspaceUpsertWithoutEventsInput {

    @Field(() => WorkspaceUpdateWithoutEventsInput, {nullable:false})
    update!: WorkspaceUpdateWithoutEventsInput;

    @Field(() => WorkspaceCreateWithoutEventsInput, {nullable:false})
    create!: WorkspaceCreateWithoutEventsInput;
}
