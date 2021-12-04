import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DayUncheckedUpdateManyWithoutEventInput } from '../day/day-unchecked-update-many-without-event.input';

@InputType()
export class EventUncheckedUpdateWithoutStaffsInput {

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

    @Field(() => DayUncheckedUpdateManyWithoutEventInput, {nullable:true})
    days?: DayUncheckedUpdateManyWithoutEventInput;
}
