import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutProfileInput } from '../user/user-update-one-without-profile.input';

@InputType()
export class ProfileUpdateInput {

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

    @Field(() => UserUpdateOneWithoutProfileInput, {nullable:true})
    user?: UserUpdateOneWithoutProfileInput;
}
