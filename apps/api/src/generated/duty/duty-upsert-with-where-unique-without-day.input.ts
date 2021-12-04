import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyUpdateWithoutDayInput } from './duty-update-without-day.input';
import { DutyCreateWithoutDayInput } from './duty-create-without-day.input';

@InputType()
export class DutyUpsertWithWhereUniqueWithoutDayInput {

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;

    @Field(() => DutyUpdateWithoutDayInput, {nullable:false})
    update!: DutyUpdateWithoutDayInput;

    @Field(() => DutyCreateWithoutDayInput, {nullable:false})
    create!: DutyCreateWithoutDayInput;
}
