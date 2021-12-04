import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyCreateWithoutDayInput } from './duty-create-without-day.input';

@InputType()
export class DutyCreateOrConnectWithoutDayInput {

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;

    @Field(() => DutyCreateWithoutDayInput, {nullable:false})
    create!: DutyCreateWithoutDayInput;
}
