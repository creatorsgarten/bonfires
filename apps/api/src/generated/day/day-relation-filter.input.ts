import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DayWhereInput } from './day-where.input';

@InputType()
export class DayRelationFilter {

    @Field(() => DayWhereInput, {nullable:true})
    is?: DayWhereInput;

    @Field(() => DayWhereInput, {nullable:true})
    isNot?: DayWhereInput;
}
