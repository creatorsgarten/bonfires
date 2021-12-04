import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ProfileUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    homeAddress?: string;

    @Field(() => String, {nullable:true})
    lineId?: string;
}
