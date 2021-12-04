import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateWithoutAgendasInput } from './day-create-without-agendas.input';
import { DayCreateOrConnectWithoutAgendasInput } from './day-create-or-connect-without-agendas.input';
import { DayUpsertWithoutAgendasInput } from './day-upsert-without-agendas.input';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayUpdateWithoutAgendasInput } from './day-update-without-agendas.input';

@InputType()
export class DayUpdateOneWithoutAgendasInput {

    @Field(() => DayCreateWithoutAgendasInput, {nullable:true})
    create?: DayCreateWithoutAgendasInput;

    @Field(() => DayCreateOrConnectWithoutAgendasInput, {nullable:true})
    connectOrCreate?: DayCreateOrConnectWithoutAgendasInput;

    @Field(() => DayUpsertWithoutAgendasInput, {nullable:true})
    upsert?: DayUpsertWithoutAgendasInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DayWhereUniqueInput, {nullable:true})
    connect?: DayWhereUniqueInput;

    @Field(() => DayUpdateWithoutAgendasInput, {nullable:true})
    update?: DayUpdateWithoutAgendasInput;
}
