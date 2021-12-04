import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayCreateWithoutEventInput } from './day-create-without-event.input';

@InputType()
export class DayCreateOrConnectWithoutEventInput {

    @Field(() => DayWhereUniqueInput, {nullable:false})
    where!: DayWhereUniqueInput;

    @Field(() => DayCreateWithoutEventInput, {nullable:false})
    create!: DayCreateWithoutEventInput;
}
