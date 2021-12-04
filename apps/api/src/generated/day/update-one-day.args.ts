import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayUpdateInput } from './day-update.input';
import { DayWhereUniqueInput } from './day-where-unique.input';

@ArgsType()
export class UpdateOneDayArgs {

    @Field(() => DayUpdateInput, {nullable:false})
    data!: DayUpdateInput;

    @Field(() => DayWhereUniqueInput, {nullable:false})
    where!: DayWhereUniqueInput;
}
