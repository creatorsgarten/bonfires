import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyWhereInput } from './duty-where.input';

@InputType()
export class DutyRelationFilter {

    @Field(() => DutyWhereInput, {nullable:true})
    is?: DutyWhereInput;

    @Field(() => DutyWhereInput, {nullable:true})
    isNot?: DutyWhereInput;
}
