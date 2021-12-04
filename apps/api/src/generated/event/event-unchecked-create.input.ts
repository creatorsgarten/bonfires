import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DayUncheckedCreateNestedManyWithoutEventInput } from '../day/day-unchecked-create-nested-many-without-event.input';
import { StaffUncheckedCreateNestedManyWithoutEventInput } from '../staff/staff-unchecked-create-nested-many-without-event.input';

@InputType()
export class EventUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Int, {nullable:true})
    workspaceId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DayUncheckedCreateNestedManyWithoutEventInput, {nullable:true})
    days?: DayUncheckedCreateNestedManyWithoutEventInput;

    @Field(() => StaffUncheckedCreateNestedManyWithoutEventInput, {nullable:true})
    staffs?: StaffUncheckedCreateNestedManyWithoutEventInput;
}
