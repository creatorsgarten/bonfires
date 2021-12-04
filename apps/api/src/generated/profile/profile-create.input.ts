import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';

@InputType()
export class ProfileCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:true})
    user?: UserCreateNestedOneWithoutProfileInput;
}
