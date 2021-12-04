import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayUpdateWithoutEventInput } from './day-update-without-event.input';
import { DayCreateWithoutEventInput } from './day-create-without-event.input';

@InputType()
export class DayUpsertWithWhereUniqueWithoutEventInput {

    @Field(() => DayWhereUniqueInput, {nullable:false})
    where!: DayWhereUniqueInput;

    @Field(() => DayUpdateWithoutEventInput, {nullable:false})
    update!: DayUpdateWithoutEventInput;

    @Field(() => DayCreateWithoutEventInput, {nullable:false})
    create!: DayCreateWithoutEventInput;
}
