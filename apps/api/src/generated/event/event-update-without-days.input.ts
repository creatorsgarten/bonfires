import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateManyWithoutEventInput } from '../staff/staff-update-many-without-event.input';
import { WorkspaceUpdateOneWithoutEventsInput } from '../workspace/workspace-update-one-without-events.input';

@InputType()
export class EventUpdateWithoutDaysInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => StaffUpdateManyWithoutEventInput, {nullable:true})
    staffs?: StaffUpdateManyWithoutEventInput;

    @Field(() => WorkspaceUpdateOneWithoutEventsInput, {nullable:true})
    workspace?: WorkspaceUpdateOneWithoutEventsInput;
}
