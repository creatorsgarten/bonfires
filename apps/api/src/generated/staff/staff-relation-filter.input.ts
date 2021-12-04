import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereInput } from './staff-where.input';

@InputType()
export class StaffRelationFilter {

    @Field(() => StaffWhereInput, {nullable:true})
    is?: StaffWhereInput;

    @Field(() => StaffWhereInput, {nullable:true})
    isNot?: StaffWhereInput;
}
