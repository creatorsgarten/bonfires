import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayCreateWithoutAgendasInput } from './day-create-without-agendas.input';

@InputType()
export class DayCreateOrConnectWithoutAgendasInput {

    @Field(() => DayWhereUniqueInput, {nullable:false})
    where!: DayWhereUniqueInput;

    @Field(() => DayCreateWithoutAgendasInput, {nullable:false})
    create!: DayCreateWithoutAgendasInput;
}
