import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedManyWithoutDutyInput } from '../task/task-unchecked-create-nested-many-without-duty.input';

@InputType()
export class DutyUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    dayId!: number;

    @Field(() => Int, {nullable:false})
    startSlot!: number;

    @Field(() => Int, {nullable:false})
    endSlot!: number;

    @Field(() => Int, {nullable:false})
    squadId!: number;

    @Field(() => TaskUncheckedCreateNestedManyWithoutDutyInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutDutyInput;
}
