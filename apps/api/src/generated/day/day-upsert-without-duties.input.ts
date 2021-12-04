import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayUpdateWithoutDutiesInput } from './day-update-without-duties.input';
import { DayCreateWithoutDutiesInput } from './day-create-without-duties.input';

@InputType()
export class DayUpsertWithoutDutiesInput {

    @Field(() => DayUpdateWithoutDutiesInput, {nullable:false})
    update!: DayUpdateWithoutDutiesInput;

    @Field(() => DayCreateWithoutDutiesInput, {nullable:false})
    create!: DayCreateWithoutDutiesInput;
}
