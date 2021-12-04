import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayCreateWithoutDirectorsInput } from './day-create-without-directors.input';

@InputType()
export class DayCreateOrConnectWithoutDirectorsInput {

    @Field(() => DayWhereUniqueInput, {nullable:false})
    where!: DayWhereUniqueInput;

    @Field(() => DayCreateWithoutDirectorsInput, {nullable:false})
    create!: DayCreateWithoutDirectorsInput;
}
