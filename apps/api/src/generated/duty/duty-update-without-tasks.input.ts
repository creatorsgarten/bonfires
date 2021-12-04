import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DayUpdateOneRequiredWithoutDutiesInput } from '../day/day-update-one-required-without-duties.input';
import { SquadUpdateOneRequiredWithoutDutiesInput } from '../squad/squad-update-one-required-without-duties.input';

@InputType()
export class DutyUpdateWithoutTasksInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    startSlot?: number;

    @Field(() => Int, {nullable:true})
    endSlot?: number;

    @Field(() => DayUpdateOneRequiredWithoutDutiesInput, {nullable:true})
    day?: DayUpdateOneRequiredWithoutDutiesInput;

    @Field(() => SquadUpdateOneRequiredWithoutDutiesInput, {nullable:true})
    squad?: SquadUpdateOneRequiredWithoutDutiesInput;
}
