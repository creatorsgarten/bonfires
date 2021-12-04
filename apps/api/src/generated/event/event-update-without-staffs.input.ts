import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayUpdateManyWithoutEventInput } from '../day/day-update-many-without-event.input';
import { WorkspaceUpdateOneWithoutEventsInput } from '../workspace/workspace-update-one-without-events.input';

@InputType()
export class EventUpdateWithoutStaffsInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DayUpdateManyWithoutEventInput, {nullable:true})
    days?: DayUpdateManyWithoutEventInput;

    @Field(() => WorkspaceUpdateOneWithoutEventsInput, {nullable:true})
    workspace?: WorkspaceUpdateOneWithoutEventsInput;
}
