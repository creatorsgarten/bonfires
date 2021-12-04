import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayCreateWithoutDutiesInput } from './day-create-without-duties.input';

@InputType()
export class DayCreateOrConnectWithoutDutiesInput {

    @Field(() => DayWhereUniqueInput, {nullable:false})
    where!: DayWhereUniqueInput;

    @Field(() => DayCreateWithoutDutiesInput, {nullable:false})
    create!: DayCreateWithoutDutiesInput;
}
