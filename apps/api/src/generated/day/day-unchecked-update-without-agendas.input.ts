import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffUncheckedUpdateManyWithoutDirectorDayInput } from '../staff/staff-unchecked-update-many-without-director-day.input';
import { DutyUncheckedUpdateManyWithoutDayInput } from '../duty/duty-unchecked-update-many-without-day.input';

@InputType()
export class DayUncheckedUpdateWithoutAgendasInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => Int, {nullable:true})
    eventId?: number;

    @Field(() => StaffUncheckedUpdateManyWithoutDirectorDayInput, {nullable:true})
    directors?: StaffUncheckedUpdateManyWithoutDirectorDayInput;

    @Field(() => DutyUncheckedUpdateManyWithoutDayInput, {nullable:true})
    duties?: DutyUncheckedUpdateManyWithoutDayInput;
}
