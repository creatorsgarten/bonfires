import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereInput } from './staff-where.input';

@InputType()
export class StaffListRelationFilter {

    @Field(() => StaffWhereInput, {nullable:true})
    every?: StaffWhereInput;

    @Field(() => StaffWhereInput, {nullable:true})
    some?: StaffWhereInput;

    @Field(() => StaffWhereInput, {nullable:true})
    none?: StaffWhereInput;
}
