import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventUncheckedUpdateManyWithoutWorkspaceInput } from '../event/event-unchecked-update-many-without-workspace.input';

@InputType()
export class WorkspaceUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => EventUncheckedUpdateManyWithoutWorkspaceInput, {nullable:true})
    events?: EventUncheckedUpdateManyWithoutWorkspaceInput;
}
