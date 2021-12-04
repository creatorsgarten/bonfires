import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUncheckedUpdateManyWithoutEventInput } from '../staff/staff-unchecked-update-many-without-event.input';

@InputType()
export class EventUncheckedUpdateWithoutDaysInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Int, {nullable:true})
    workspaceId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => StaffUncheckedUpdateManyWithoutEventInput, {nullable:true})
    staffs?: StaffUncheckedUpdateManyWithoutEventInput;
}
