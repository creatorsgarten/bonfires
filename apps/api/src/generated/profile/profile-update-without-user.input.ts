import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProfileUpdateWithoutUserInput {

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
