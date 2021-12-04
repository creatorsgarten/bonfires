import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyWhereInput } from './duty-where.input';

@InputType()
export class DutyListRelationFilter {

    @Field(() => DutyWhereInput, {nullable:true})
    every?: DutyWhereInput;

    @Field(() => DutyWhereInput, {nullable:true})
    some?: DutyWhereInput;

    @Field(() => DutyWhereInput, {nullable:true})
    none?: DutyWhereInput;
}
