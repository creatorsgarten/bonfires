import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayUpdateManyWithoutEventInput } from '../day/day-update-many-without-event.input';
import { StaffUpdateManyWithoutEventInput } from '../staff/staff-update-many-without-event.input';

@InputType()
export class EventUpdateWithoutWorkspaceInput {

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

    @Field(() => StaffUpdateManyWithoutEventInput, {nullable:true})
    staffs?: StaffUpdateManyWithoutEventInput;
}
