import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateWithoutDirectorsInput } from './day-create-without-directors.input';
import { DayCreateOrConnectWithoutDirectorsInput } from './day-create-or-connect-without-directors.input';
import { DayUpsertWithoutDirectorsInput } from './day-upsert-without-directors.input';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayUpdateWithoutDirectorsInput } from './day-update-without-directors.input';

@InputType()
export class DayUpdateOneWithoutDirectorsInput {

    @Field(() => DayCreateWithoutDirectorsInput, {nullable:true})
    create?: DayCreateWithoutDirectorsInput;

    @Field(() => DayCreateOrConnectWithoutDirectorsInput, {nullable:true})
    connectOrCreate?: DayCreateOrConnectWithoutDirectorsInput;

    @Field(() => DayUpsertWithoutDirectorsInput, {nullable:true})
    upsert?: DayUpsertWithoutDirectorsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DayWhereUniqueInput, {nullable:true})
    connect?: DayWhereUniqueInput;

    @Field(() => DayUpdateWithoutDirectorsInput, {nullable:true})
    update?: DayUpdateWithoutDirectorsInput;
}
