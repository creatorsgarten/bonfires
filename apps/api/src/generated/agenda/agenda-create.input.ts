import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DayCreateNestedOneWithoutAgendasInput } from '../day/day-create-nested-one-without-agendas.input';

@InputType()
export class AgendaCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    startSlot!: number;

    @Field(() => Int, {nullable:false})
    endSlot!: number;

    @Field(() => DayCreateNestedOneWithoutAgendasInput, {nullable:true})
    day?: DayCreateNestedOneWithoutAgendasInput;
}
