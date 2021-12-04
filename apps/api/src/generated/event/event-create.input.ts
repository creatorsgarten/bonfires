import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateNestedManyWithoutEventInput } from '../day/day-create-nested-many-without-event.input';
import { StaffCreateNestedManyWithoutEventInput } from '../staff/staff-create-nested-many-without-event.input';
import { WorkspaceCreateNestedOneWithoutEventsInput } from '../workspace/workspace-create-nested-one-without-events.input';

@InputType()
export class EventCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DayCreateNestedManyWithoutEventInput, {nullable:true})
    days?: DayCreateNestedManyWithoutEventInput;

    @Field(() => StaffCreateNestedManyWithoutEventInput, {nullable:true})
    staffs?: StaffCreateNestedManyWithoutEventInput;

    @Field(() => WorkspaceCreateNestedOneWithoutEventsInput, {nullable:true})
    workspace?: WorkspaceCreateNestedOneWithoutEventsInput;
}
