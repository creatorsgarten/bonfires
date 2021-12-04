import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyUpdateWithoutDayInput } from './duty-update-without-day.input';

@InputType()
export class DutyUpdateWithWhereUniqueWithoutDayInput {

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;

    @Field(() => DutyUpdateWithoutDayInput, {nullable:false})
    data!: DutyUpdateWithoutDayInput;
}
