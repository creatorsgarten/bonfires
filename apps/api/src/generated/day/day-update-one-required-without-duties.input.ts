import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayCreateWithoutDutiesInput } from './day-create-without-duties.input';
import { DayCreateOrConnectWithoutDutiesInput } from './day-create-or-connect-without-duties.input';
import { DayUpsertWithoutDutiesInput } from './day-upsert-without-duties.input';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayUpdateWithoutDutiesInput } from './day-update-without-duties.input';

@InputType()
export class DayUpdateOneRequiredWithoutDutiesInput {

    @Field(() => DayCreateWithoutDutiesInput, {nullable:true})
    create?: DayCreateWithoutDutiesInput;

    @Field(() => DayCreateOrConnectWithoutDutiesInput, {nullable:true})
    connectOrCreate?: DayCreateOrConnectWithoutDutiesInput;

    @Field(() => DayUpsertWithoutDutiesInput, {nullable:true})
    upsert?: DayUpsertWithoutDutiesInput;

    @Field(() => DayWhereUniqueInput, {nullable:true})
    connect?: DayWhereUniqueInput;

    @Field(() => DayUpdateWithoutDutiesInput, {nullable:true})
    update?: DayUpdateWithoutDutiesInput;
}
