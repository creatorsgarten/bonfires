import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskUncheckedUpdateManyWithoutDutyInput } from '../task/task-unchecked-update-many-without-duty.input';

@InputType()
export class DutyUncheckedUpdateWithoutSquadInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    dayId?: number;

    @Field(() => Int, {nullable:true})
    startSlot?: number;

    @Field(() => Int, {nullable:true})
    endSlot?: number;

    @Field(() => TaskUncheckedUpdateManyWithoutDutyInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutDutyInput;
}
