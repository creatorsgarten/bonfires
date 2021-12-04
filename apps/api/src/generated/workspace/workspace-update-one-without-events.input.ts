import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutEventsInput } from './workspace-create-without-events.input';
import { WorkspaceCreateOrConnectWithoutEventsInput } from './workspace-create-or-connect-without-events.input';
import { WorkspaceUpsertWithoutEventsInput } from './workspace-upsert-without-events.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceUpdateWithoutEventsInput } from './workspace-update-without-events.input';

@InputType()
export class WorkspaceUpdateOneWithoutEventsInput {

    @Field(() => WorkspaceCreateWithoutEventsInput, {nullable:true})
    create?: WorkspaceCreateWithoutEventsInput;

    @Field(() => WorkspaceCreateOrConnectWithoutEventsInput, {nullable:true})
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEventsInput;

    @Field(() => WorkspaceUpsertWithoutEventsInput, {nullable:true})
    upsert?: WorkspaceUpsertWithoutEventsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:true})
    connect?: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceUpdateWithoutEventsInput, {nullable:true})
    update?: WorkspaceUpdateWithoutEventsInput;
}
