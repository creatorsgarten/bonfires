import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayUpdateWithoutDirectorsInput } from './day-update-without-directors.input';
import { DayCreateWithoutDirectorsInput } from './day-create-without-directors.input';

@InputType()
export class DayUpsertWithoutDirectorsInput {

    @Field(() => DayUpdateWithoutDirectorsInput, {nullable:false})
    update!: DayUpdateWithoutDirectorsInput;

    @Field(() => DayCreateWithoutDirectorsInput, {nullable:false})
    create!: DayCreateWithoutDirectorsInput;
}
