import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayWhereUniqueInput } from './day-where-unique.input';
import { DayCreateInput } from './day-create.input';
import { DayUpdateInput } from './day-update.input';

@ArgsType()
export class UpsertOneDayArgs {

    @Field(() => DayWhereUniqueInput, {nullable:false})
    where!: DayWhereUniqueInput;

    @Field(() => DayCreateInput, {nullable:false})
    create!: DayCreateInput;

    @Field(() => DayUpdateInput, {nullable:false})
    update!: DayUpdateInput;
}
