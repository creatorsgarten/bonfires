import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DayUpdateOneWithoutAgendasInput } from '../day/day-update-one-without-agendas.input';

@InputType()
export class AgendaUpdateInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    startSlot?: number;

    @Field(() => Int, {nullable:true})
    endSlot?: number;

    @Field(() => DayUpdateOneWithoutAgendasInput, {nullable:true})
    day?: DayUpdateOneWithoutAgendasInput;
}
