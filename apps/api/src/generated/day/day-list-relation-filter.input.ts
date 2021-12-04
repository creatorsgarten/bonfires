import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayWhereInput } from './day-where.input';

@InputType()
export class DayListRelationFilter {

    @Field(() => DayWhereInput, {nullable:true})
    every?: DayWhereInput;

    @Field(() => DayWhereInput, {nullable:true})
    some?: DayWhereInput;

    @Field(() => DayWhereInput, {nullable:true})
    none?: DayWhereInput;
}
