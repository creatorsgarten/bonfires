import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateWithoutAgendasInput } from './day-create-without-agendas.input';
import { DayCreateOrConnectWithoutAgendasInput } from './day-create-or-connect-without-agendas.input';
import { DayWhereUniqueInput } from './day-where-unique.input';

@InputType()
export class DayCreateNestedOneWithoutAgendasInput {

    @Field(() => DayCreateWithoutAgendasInput, {nullable:true})
    create?: DayCreateWithoutAgendasInput;

    @Field(() => DayCreateOrConnectWithoutAgendasInput, {nullable:true})
    connectOrCreate?: DayCreateOrConnectWithoutAgendasInput;

    @Field(() => DayWhereUniqueInput, {nullable:true})
    connect?: DayWhereUniqueInput;
}
