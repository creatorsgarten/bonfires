import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayUpdateWithoutEventInput } from './day-update-without-event.input';

@InputType()
export class DayUpdateWithWhereUniqueWithoutEventInput {

    @Field(() => DayWhereUniqueInput, {nullable:false})
    where!: DayWhereUniqueInput;

    @Field(() => DayUpdateWithoutEventInput, {nullable:false})
    data!: DayUpdateWithoutEventInput;
}
