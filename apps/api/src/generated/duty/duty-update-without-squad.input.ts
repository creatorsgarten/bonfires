import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DayUpdateOneRequiredWithoutDutiesInput } from '../day/day-update-one-required-without-duties.input';
import { TaskUpdateManyWithoutDutyInput } from '../task/task-update-many-without-duty.input';

@InputType()
export class DutyUpdateWithoutSquadInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    startSlot?: number;

    @Field(() => Int, {nullable:true})
    endSlot?: number;

    @Field(() => DayUpdateOneRequiredWithoutDutiesInput, {nullable:true})
    day?: DayUpdateOneRequiredWithoutDutiesInput;

    @Field(() => TaskUpdateManyWithoutDutyInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutDutyInput;
}
