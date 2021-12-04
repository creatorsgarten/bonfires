import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateWithoutDirectorsInput } from './day-create-without-directors.input';
import { DayCreateOrConnectWithoutDirectorsInput } from './day-create-or-connect-without-directors.input';
import { DayWhereUniqueInput } from './day-where-unique.input';

@InputType()
export class DayCreateNestedOneWithoutDirectorsInput {

    @Field(() => DayCreateWithoutDirectorsInput, {nullable:true})
    create?: DayCreateWithoutDirectorsInput;

    @Field(() => DayCreateOrConnectWithoutDirectorsInput, {nullable:true})
    connectOrCreate?: DayCreateOrConnectWithoutDirectorsInput;

    @Field(() => DayWhereUniqueInput, {nullable:true})
    connect?: DayWhereUniqueInput;
}
