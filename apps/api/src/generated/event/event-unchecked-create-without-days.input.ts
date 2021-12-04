import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUncheckedCreateNestedManyWithoutEventInput } from '../staff/staff-unchecked-create-nested-many-without-event.input';

@InputType()
export class EventUncheckedCreateWithoutDaysInput {

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

    @Field(() => StaffUncheckedCreateNestedManyWithoutEventInput, {nullable:true})
    staffs?: StaffUncheckedCreateNestedManyWithoutEventInput;
}
