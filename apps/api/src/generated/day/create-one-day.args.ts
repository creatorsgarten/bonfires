import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayCreateInput } from './day-create.input';

@ArgsType()
export class CreateOneDayArgs {

    @Field(() => DayCreateInput, {nullable:false})
    data!: DayCreateInput;
}
