import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayWhereUniqueInput } from './day-where-unique.input';

@ArgsType()
export class DeleteOneDayArgs {

    @Field(() => DayWhereUniqueInput, {nullable:false})
    where!: DayWhereUniqueInput;
}
