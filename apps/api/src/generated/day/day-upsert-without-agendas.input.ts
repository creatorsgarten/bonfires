import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayUpdateWithoutAgendasInput } from './day-update-without-agendas.input';
import { DayCreateWithoutAgendasInput } from './day-create-without-agendas.input';

@InputType()
export class DayUpsertWithoutAgendasInput {

    @Field(() => DayUpdateWithoutAgendasInput, {nullable:false})
    update!: DayUpdateWithoutAgendasInput;

    @Field(() => DayCreateWithoutAgendasInput, {nullable:false})
    create!: DayCreateWithoutAgendasInput;
}
