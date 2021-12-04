import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SquadUpdateOneRequiredWithoutDutiesInput } from '../squad/squad-update-one-required-without-duties.input';
import { TaskUpdateManyWithoutDutyInput } from '../task/task-update-many-without-duty.input';

@InputType()
export class DutyUpdateWithoutDayInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    startSlot?: number;

    @Field(() => Int, {nullable:true})
    endSlot?: number;

    @Field(() => SquadUpdateOneRequiredWithoutDutiesInput, {nullable:true})
    squad?: SquadUpdateOneRequiredWithoutDutiesInput;

    @Field(() => TaskUpdateManyWithoutDutyInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutDutyInput;
}
