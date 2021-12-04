import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DayCreateNestedOneWithoutDutiesInput } from '../day/day-create-nested-one-without-duties.input';
import { TaskCreateNestedManyWithoutDutyInput } from '../task/task-create-nested-many-without-duty.input';

@InputType()
export class DutyCreateWithoutSquadInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    startSlot!: number;

    @Field(() => Int, {nullable:false})
    endSlot!: number;

    @Field(() => DayCreateNestedOneWithoutDutiesInput, {nullable:false})
    day!: DayCreateNestedOneWithoutDutiesInput;

    @Field(() => TaskCreateNestedManyWithoutDutyInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutDutyInput;
}
