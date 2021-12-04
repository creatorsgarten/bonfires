import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateWithoutDutiesInput } from './day-create-without-duties.input';
import { DayCreateOrConnectWithoutDutiesInput } from './day-create-or-connect-without-duties.input';
import { DayWhereUniqueInput } from './day-where-unique.input';

@InputType()
export class DayCreateNestedOneWithoutDutiesInput {

    @Field(() => DayCreateWithoutDutiesInput, {nullable:true})
    create?: DayCreateWithoutDutiesInput;

    @Field(() => DayCreateOrConnectWithoutDutiesInput, {nullable:true})
    connectOrCreate?: DayCreateOrConnectWithoutDutiesInput;

    @Field(() => DayWhereUniqueInput, {nullable:true})
    connect?: DayWhereUniqueInput;
}
