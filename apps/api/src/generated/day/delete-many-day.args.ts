import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayWhereInput } from './day-where.input';

@ArgsType()
export class DeleteManyDayArgs {

    @Field(() => DayWhereInput, {nullable:true})
    where?: DayWhereInput;
}
